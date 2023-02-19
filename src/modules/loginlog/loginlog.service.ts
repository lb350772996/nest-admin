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
        const pageQuery =  this.loginLogRepository.createQueryBuilder('u').where("u.username = :username  ",{username:req.query.username});    
        const skip =  !req.query.page==null ? req.query.page :0;          
        var pageList = await pageQuery.skip(skip).take(req.query.pageSize).getManyAndCount();//.getMany();    
        return await this.setPage(pageList,req.query);
       
    }
    async addLog(userinfo,req){
        let time = new Date()
        //get ip 
        let ip = req.ip
        if (ip.indexOf('::ffff:') !== -1){
          ip = ip.substring(7)
        } 
        const agent = req.headers['user-agent'].toLocaleLowerCase()
   
        const values ={
            username : userinfo.username,
            ip : ip,
            ipLocation: '未知',
            os : await this.os(agent),
            browser : await this.browser(agent),
            status : 1,
            message : '登录成功',
            loginTime : time //this.timestampToTime(time.toLocaleString('en-US',{hour12: false}).split(" "))
        }  
        var s = await this.loginLogRepository.createQueryBuilder().insert().into(LgSystemLoginLog).values(values).execute()
    }
 

    async os(agent:string){
        if ( agent.indexOf('win') >1  &&  agent.indexOf('6.1')  >1 ) {
            return 'Windows 7';
        }
        if ( agent.indexOf('win')  >1 &&  agent.indexOf('6.2')  >1) {
            return 'Windows 8';
        }
        if( agent.indexOf('win')  >1 &&  agent.indexOf('10.0') >1 ) {
            return 'Windows 10';
        }
        if( agent.indexOf('win')  >1 &&  agent.indexOf('11.0')  >1) {
            return 'Windows 11';
        }
        if ( agent.indexOf('win')  >1 &&  agent.indexOf('5.1')  >1) {
            return 'Windows XP';
        }
        if ( agent.indexOf('linux')  >1) {
            return 'Linux';
        }
        if ( agent.indexOf('mac')  >1) {
            return 'Mac';
        }
        return 'unknown';
    }
    async browser(agent){
        if ( agent.indexOf('msie')  >1  ) {
            return 'MSIE';
        }
        if ( agent.indexOf('edg')  >1 ) {
            return 'Edge';
        }
        if ( agent.indexOf('chrome')  >1) {
            return 'Chrome';
        }
        if ( agent.indexOf('firefox')  >1 ) {
            return 'Firefox';
        }
        if ( agent.indexOf('safari')  >1 ) {
            return 'Safari';
        }
        if ( agent.indexOf('opera')  >1 ) {
            return 'Opera';
        }
        return 'unknown';
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
