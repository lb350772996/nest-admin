import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersModule } from '../user/user.module';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local.strategy';
import { UsersService } from '../user/user.service';
import { AuthController } from './auth.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/entity/user/user.entity';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants';
import { JwtStrategy } from './jwt.strategy';
import { LgSystemUser } from 'src/entity/user.entity';
import { SystemModule } from '../system/system.model';
import { SystemService } from '../system/system.service';
import { SysMenuService } from '../sysmenu/sysmenu.service';
import { LgSystemMenu } from 'src/entity/LgSystemMenu.entity';
import { LoginLogService } from '../loginlog/loginlog.service';
import { LgSystemLoginLog } from 'src/entity/LgSystemLoginLog.entity';


@Module({
  imports: [
    UsersModule,
    PassportModule,
    TypeOrmModule.forFeature([LgSystemUser]),
    TypeOrmModule.forFeature([LgSystemMenu]),
    TypeOrmModule.forFeature([LgSystemLoginLog]),
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '160s' },
    }),
  ],
  providers: [UsersService,AuthService,LocalStrategy,JwtStrategy,SystemService,SysMenuService,LoginLogService],
  controllers :[AuthController],
  exports :[LocalStrategy]
})
export class AuthModule {}