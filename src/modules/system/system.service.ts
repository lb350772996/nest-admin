import {  Injectable,HttpException,HttpStatus } from "@nestjs/common";
import { SysMenuService } from "../sysmenu/sysmenu.service";
import { UsersService } from "../user/user.service";


@Injectable()
export class SystemService {
    constructor(
        private readonly userService:UsersService,
        private readonly sysMenuService:SysMenuService
        ){
    }


    async  getInfo(user) {
       
        
            // res['roles'] =['superAdmin'];
        if(!user.userId){
            throw new  HttpException( { message: '不存在用户信息'}, HttpStatus.BAD_REQUEST);
        }
        const userinfo = await this.userService.findOne(user.userId);
        delete  userinfo.password
        const res = {};
        res['user'] = userinfo;
        //isSuperAdmin
        if( this.userService.isSuperAdmin(userinfo.id)){
            // this.sysMenuService.getSuperAdminRouters();
            res['roles'] =['superAdmin'];
            res['routers'] = await this.sysMenuService.getSuperAdminRouters();
            res['codes'] =['*'];
        }
        return res
        
        // console.log(userinfo,'userid')
        // return {user};
    }
}