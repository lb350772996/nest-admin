import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { LgSystemMenu } from "src/entity/LgSystemMenu.entity";

import { SysMenuService } from "./sysmenu.service";



@Module({
    providers :[SysMenuService],
    imports :[TypeOrmModule.forFeature([LgSystemMenu])],
    controllers :[],
})
export class SysMenuodule{}