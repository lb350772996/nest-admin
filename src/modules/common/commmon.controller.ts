import { Controller, Get, Post, Request, UseGuards,Headers, Body, Query, Param, UseInterceptors, HttpException, HttpStatus } from '@nestjs/common';
import { LoginLogService } from '../loginlog/loginlog.service';
import { AuthGuard } from '@nestjs/passport';
import { BaseController } from '../base/base.controller';


@Controller('/system/common')
// @UseGuards(AuthGuard('jwt'))
export class commonController extends BaseController{

    constructor(
        private readonly loginLogService: LoginLogService ,
    ) {
        super();
    }
   
    @Get('/getLoginLogList')
    async getLoginLogList(@Request() req){
        req.query.page = 1;
        const result = await this.loginLogService.getLogList(req);
        return this.success(result);
    }
 
    async sleep(number){
        var now = new Date();
        var exitTime = now.getTime() + number * 1000;
        while (true) {
            now = new Date();
            if(now.getTime() > exitTime)
            return 
        }
    }

    @Get('/getOperationLogList')
    async getOperationLogList(@Request() req,@Headers('token') token) {
        return{
            code :  HttpStatus.OK,
            message : '成功',
            success: true,
            data :{
                 items :[],
                 pageInfo: {
                     currentPage:1,
                     total :0,
                     totalPage :1,
                 }
            }  
         }
    }
    @Get('/getNoticeList')
    async getNoticeList(@Request() req,@Headers('token') token) {
        return{
           code :  HttpStatus.OK,
           message : '成功',
           success: true,
           data :{
                items :[],
                pageInfo: {
                    currentPage:1,
                    total :0,
                    totalPage :1,
                }
           } 
        }
    }


}