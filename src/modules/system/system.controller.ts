import { Controller, Get, Post, Request, UseGuards,Headers, Body, Query, Param, UseInterceptors, HttpException, HttpStatus } from '@nestjs/common';
import { SystemService } from './system.service';


@Controller('/sys')
export class systemController {

    constructor(
        private readonly systemService :SystemService
    ) {}
    @Get('/getInfo')
    async getInfo(@Request() req,@Headers('token') token) {
        console.log('in gei finfo')
        // this.systemService.getInfo('1');
        return 123;
    }

}