import { Controller, Get, Post, Request, UseGuards,Headers, Body, Query, Param, UseInterceptors, HttpException, HttpStatus } from '@nestjs/common';
import { LoginLogService } from '../loginlog/loginlog.service';
import { AuthGuard } from '@nestjs/passport';


@Controller('/system/common')
@UseGuards(AuthGuard('jwt'))
export class commonController {

    constructor(
        private readonly loginLogService: LoginLogService ,
    ) {}
   
    @Get('/getLoginLogList')
    async getLoginLogList(@Request() req){
        req.query.page = 1;
        const logList = await this.loginLogService.getLogList(req);
        return{
            code :  HttpStatus.OK,
            message : '成功',
            success: true,
            data :logList,
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