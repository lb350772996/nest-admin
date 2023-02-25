import { Controller, Get , Query,Headers } from '@nestjs/common';
import { Post, UseGuards,Request } from '@nestjs/common/decorators';
import { AuthGuard } from '@nestjs/passport/dist';
import { BaseController } from '../base/base.controller';
import { UsersService } from './user.service';


@Controller('/system/user')
export class UserController extends BaseController {
    constructor(
        private readonly userService :UsersService,
        // private ro
        ){
            super();
        }

  

    @UseGuards(AuthGuard('jwt'))
    @Post('updateInfo')
    async updateInfo(@Request() req) {
        this.userService.update(req.user.userId,req.body);
    }


}