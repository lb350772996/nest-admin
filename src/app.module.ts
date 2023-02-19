import { Dependencies, MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ConfigModule,ConfigService } from '@nestjs/config';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { resolve } from 'path';
import { DataSource } from 'typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import configuration from './config/configuration';
import { AuthModule } from './modules/auth/auth.module';
import { jwtConstants } from './modules/auth/constants';
import { JwtStrategy } from './modules/auth/jwt.strategy';
import { CommonModule } from './modules/common/common.module';
import { HelloController } from './modules/hello/hello.controller';
import { HelloModule } from './modules/hello/hello.module';
// import { SysMenuodule } from './modules/sysmenu/sysmenu.model';
import { SystemModule } from './modules/system/system.model';
import { UsersModule } from './modules/user/user.module';


// const entitiesPaths = [join(__dirname, '..', '**', '*.entity.{ts,js}')]
@Dependencies(DataSource)
@Module({
  imports: [
    HelloModule,
    // SysMenuodule,
    AuthModule,
    UsersModule,
    SystemModule,
    CommonModule,
    ConfigModule.forRoot({
      load : [configuration],
      isGlobal: true,
    }),
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '160s' },
    }),
    TypeOrmModule.forRootAsync({
      useFactory:(config : ConfigService)=>config.get('database'),
      inject : [ConfigService],
    }
    )
  ],
  controllers: [AppController],
  providers: [AppService,JwtStrategy],
})
export class AppModule  {
  constructor(dataSource) {
    // this.dataSource = dataSource;
  }
}
