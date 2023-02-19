import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { LgSystemMenu } from "src/entity/LgSystemMenu.entity";
import { LgSystemUser } from "src/entity/user.entity";
import { SysMenuService } from "../sysmenu/sysmenu.service";
import { UsersService } from "../user/user.service";
import { systemController } from "./system.controller";
import { SystemService } from "./system.service";

@Module({
    providers :[SystemService,UsersService,SysMenuService],
    imports :[      
        TypeOrmModule.forFeature([LgSystemUser]),
        TypeOrmModule.forFeature([LgSystemMenu])
    ],
    controllers :[systemController],

})
export class SystemModule{}