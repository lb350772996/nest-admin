import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { Observable } from 'rxjs';
import { jwtConstants } from 'src/modules/auth/constants';

@Injectable()
export class RoleGuard implements CanActivate {
    constructor(private readonly reflector: Reflector
        ,private readonly jwtService: JwtService
        ) {}
  canActivate(
    context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
    // return true;
    console.log('guard ....');
    const payload = {username: 'sglb', sub: '122'};
    const config = {
      secret: jwtConstants.secret,
      privateKey:jwtConstants.secret,
    }
    var sb = this.jwtService.sign(payload,config);
    console.log(sb)
    // const roles = this.reflector.get<string[]>('roles', context.getHandler());
    // if (!roles) {
    //   return true;
    // }
    const request = context.switchToHttp().getRequest();
    var header  =request.header('token') 
    console.log('header',request.header('token'));
    console.log('header',request.Headers);
    var s = this.jwtService.verify(header,config);
    console.log('ssss',s)
    // const { user } = request.query;
    // const hasRole = () =>
    //   user.roles.some(role => !!roles.find(item => item === role));

    // return user && user.roles && hasRole();
    return true;
  }
}