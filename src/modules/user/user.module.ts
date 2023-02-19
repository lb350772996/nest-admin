import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersService } from './user.service';
import { UserController } from './user.controller';
import { User } from './user.entity';
import { LgSystemUser } from 'src/entity/user.entity';


@Module({
  imports: [TypeOrmModule.forFeature([LgSystemUser])],
  providers: [UsersService],
  controllers: [UserController],
})
export class UsersModule {}