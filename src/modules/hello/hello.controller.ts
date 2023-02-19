import { Controller, Get , Query,Headers } from '@nestjs/common';
import { ConfigService } from '@nestjs/config/dist';
import { resolve } from 'path';
import { HelloService } from './hello.service';

@Controller('/hello')
export class HelloController {
    constructor(
        private readonly hellowService :HelloService,
        private configService: ConfigService
        ){}
    
    @Get()
    getAll(@Query(){id},@Headers('token') token){
        console.log( resolve(__dirname,'config','**/!(*.d).{ts,js}'))
        console.log('token',token);
        console.log(this.configService.get('database'))
        return this.hellowService.get(id);
    }

}