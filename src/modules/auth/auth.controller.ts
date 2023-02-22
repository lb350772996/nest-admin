import { Controller, Get, Post, Request, UseGuards,Headers, Body, Query, Param, UseInterceptors, HttpException, HttpStatus } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AuthGuard } from '@nestjs/passport';
import { RoleGuard } from 'src/common/guard/role.guard';
import { BaseController } from '../base/base.controller';
import { SystemService } from '../system/system.service';
import { AuthService } from './auth.service';


@Controller('/system')
export class AuthController extends BaseController {
    constructor(
        private readonly authService: AuthService ,
        private readonly jwtService: JwtService,
        private readonly systemService :SystemService
    ) {
        super();
    }

    // 登录测试
    // @UseGuards(RoleGuard)
    @Post('/login')
    async login(@Request() req) {
        const result= await this.authService.login(req)
        return this.success(result);
    }
    // 测试登录后才可访问的接口，在需要的地方使用守卫，可保证必须携带token才能访问
    // @UseGuards(AuthGuard('jwt'))
    @Get('/getInfo')
    @UseGuards(AuthGuard('jwt'))
    async getInfo(@Request() req,@Headers('token') token) {
        const result = await this.systemService.getInfo(req.user)
        return this.success(result);
    }

  
}
