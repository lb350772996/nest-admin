import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { LgSystemUser } from 'src/entity/user.entity';
import internal from 'stream';
import { getRepository, Repository, DataSource } from 'typeorm';

import { compareSync, hashSync } from 'bcrypt';
import { NormalStatusException } from 'src/common/exception/normalstatus.exception';
import { LgSystemLoginLog } from 'src/entity/LgSystemLoginLog.entity';

@Injectable()
export class LoginLogService {
    constructor(
        @InjectRepository(LgSystemLoginLog)
        private loginLogRepository: Repository<LgSystemLoginLog>,
   
    ) {}

    async  getLogList(req) {
        console.log(req.query)
        const pageQuery =  this.loginLogRepository.createQueryBuilder('u').where("u.username = :username  ",{username:req.query.username});
       
        const skip =  !req.query.page==null ? req.query.page :0;          
        var pageList = await pageQuery.skip(skip).take(req.query.pageSize).getManyAndCount();//.getMany();
       
        return await this.setPage(pageList,req.query);
       
    }
    async addLog(userinfo){
        let time = new Date()
        console.log( typeof( this.timestampToTime(time.toLocaleString('en-US',{hour12: false}).split(" "))))
        const values ={
            username : userinfo.username,
            ip : '127.0.0.1',
            ip_location: '127.0.0.1',
            os : 'win10',
            browser : 'Chrome',
            status : 1,
            message : '登录成功',
            // login_time : this.timestampToTime(time.toLocaleString('en-US',{hour12: false}).split(" "))
        }
        this.loginLogRepository.createQueryBuilder().insert()
        .into(LgSystemLoginLog).values(values).execute()
    }
    async setPage(pageList,pageSet)  {
        
        return {
            items : pageList[0],
            pageInfo : {
                currentPage:    pageSet.page,
                total : pageList[1],
                totalPage : Math.ceil( pageList[1]/pageSet.pageSize), 
            }
        }
    }
    async  checkUserByUsername(userName:string) {
        return await this.loginLogRepository.createQueryBuilder('u').where("u.username= :username",{username:userName}).getOneOrFail();
    }


    timestampToTime(times) {
        let time = times[1]
        let mdy = times[0]
        mdy = mdy.split('/')
        let month = parseInt(mdy[0]);
        let day = parseInt(mdy[1]);
        let year = parseInt(mdy[2])
        return year + '-' + month + '-' + day + ' ' + time
    }

}
