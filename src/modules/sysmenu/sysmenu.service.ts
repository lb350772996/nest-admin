import {  Injectable,HttpException,HttpStatus } from "@nestjs/common";
import { UsersService } from "../user/user.service";
import { InjectRepository } from '@nestjs/typeorm';
import { LgSystemMenu } from "src/entity/LgSystemMenu.entity";
import { Repository } from "typeorm";

@Injectable()
export class SysMenuService {
    constructor(
        @InjectRepository(LgSystemMenu)
        private sysMenuRepository: Repository<LgSystemMenu>,
      
      ) {}
    async getSuperAdminRouters(){
        const menu = await this.sysMenuRepository.createQueryBuilder('m').where("m.status=1 ").getMany();
        const routers =[];
   
        for (const key in menu) {   
            routers[key] = await this.setRouter(menu[key]);
        }
        // console.log(routers)
        return await this.toTree(routers);
        
    }

    async toTree(data = {}, iparentId =0 ){
     
        if(!data){
            return {};
        }
        const tree = []
        let num = 0;
        
        for (const j in data) {    
            if(data[j].parent_id == iparentId){
                num++;
                var child = await this.toTree(data,data[j].id)
                if(child != 0){
                    data[j].children = child;              
                }
                tree.push(data[j])
            } 
        }
        if(num == 0){
            return num;
        }
        // console.log('当前的 data',data, '当前的tree',tree)
       return tree
    }

    async setRouter(menu){
        const route = (menu.type=='L' ||menu.type == 'I')?  menu.route : '/' + menu.route ;
        return {
            id : menu.id ,
            parent_id  : menu.parentId,
            name : menu.component,
            path : route,
            redirect : menu.redirect,
            meta : {
                type : menu.type,
                icon : menu.icon,
                title : menu.name,
                hidden: menu.is_hidden === 1,
                hiddenBreadcrumb : false
            }
        }
    }


}