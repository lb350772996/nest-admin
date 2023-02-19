import { Module } from "@nestjs/common";
import { LoginLogService } from "../loginlog/loginlog.service";
import { commonController } from "./commmon.controller";
import { TypeOrmModule } from '@nestjs/typeorm';
import { LgSystemLoginLog } from "src/entity/LgSystemLoginLog.entity";


@Module({
    providers :[
        LoginLogService
       
    ],
    imports :[      
        TypeOrmModule.forFeature([LgSystemLoginLog])
    ],
    controllers :[commonController],

})
export class CommonModule{}