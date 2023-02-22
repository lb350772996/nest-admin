import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { JwtService } from '@nestjs/jwt';
import { catchError } from "rxjs";
import { NormalStatusException } from "src/common/exception/normalstatus.exception";
import { LgSystemUser } from "src/entity/user.entity";
import { EntityNotFoundError } from "typeorm";
import { LoginLogService } from "../loginlog/loginlog.service";
import { UsersService } from "../user/user.service";

@Injectable()
export class AuthService {
    constructor(
      private readonly userService:UsersService,
      private readonly jwtService: JwtService,
      private readonly loginLogService : LoginLogService
      ){
    }

    async validateUser(username:string ,password :string) :Promise <any> {
        const user = await this.userService.findOne(username);

        if(user && user.password == password){
            const {password , ...result} = user;
            return result;
        }
        return null;
    }
    async afterLogin(userinfo,req){
        //add loginlog     
        this.loginLogService.addLog(userinfo,req);
        
    }
    
    //sglb admin123
    //login server
    async login(req) {
        const user = req.body
        console.log(user,'输入参数')
      
        try {
            const  userinfo = await  this.userService.checkUserByUsername(user.username);

            const password = userinfo.password
          // console.log( 123123123)   
          //check password
            if( this.userService.passwordVerify(user.password , password) ){
                  if( userinfo.status == 1){
                      const payload = {username: userinfo.username, sub: userinfo.id};
                      await this.afterLogin(userinfo,req);
                      return {
                            token :this.jwtService.sign(payload)                         
                      };
                  }else{

                  }
          
            }else{
            throw new NormalStatusException();
            }

        } catch (error) {
            console.log(error)
            if(error instanceof EntityNotFoundError){
              throw new HttpException( { message: '用户名 不存在'}, HttpStatus.BAD_REQUEST,);
            }
            if(error instanceof NormalStatusException){
              throw new HttpException( { message: '密码错误 不存在'}, HttpStatus.BAD_REQUEST,);
            }
            throw new HttpException( { message: '未知错误'}, HttpStatus.BAD_REQUEST,);
          
        }
    
    // console.log((await userinfo).password,'userinfo')
    //check username password 
   
  }

}