import { Controller, Get , Query,Headers } from '@nestjs/common';
import { Post, UseGuards,Request } from '@nestjs/common/decorators';
import { AuthGuard } from '@nestjs/passport/dist';
import { UsersService } from './user.service';


@Controller('/user')
export class UserController {
    constructor(
        private readonly userService :UsersService,
        // private ro
        ){}

    @Get()
    getAll(@Query(){id},@Headers('token') token){
        console.log('token',token);
        // console.log(this.userService.findOne(1))
       var s = this.userService.findOne('sc');
    //    console.log(s.id);
       return s;
    }

    // @UseGuards(AuthGuard('local'))
    @Post('login')
    async login(@Request() req) {
        return req.user
    }
}