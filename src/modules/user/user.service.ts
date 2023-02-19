import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { LgSystemUser } from 'src/entity/user.entity';
import internal from 'stream';
import { getRepository, Repository,Connection, DataSource } from 'typeorm';
import { User } from './user.entity';
import { compareSync, hashSync } from 'bcrypt';
import { NormalStatusException } from 'src/common/exception/normalstatus.exception';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(LgSystemUser)
    private usersRepository: Repository<LgSystemUser>,
    private connection: Connection,
  ) {}

  // async findAll(): Promise<User[]> {
  //   var all = await this.usersRepository.find();
  //   console.log(all)
  //   return 1;
  // }
  
    setPasswordAttribute(password:string):string {
      const saltOrRounds = 10;
      return  hashSync(password, saltOrRounds);
    }
    passwordVerify(password:string,hash:string) {
      return compareSync(password, hash)
    }

  async  checkUserByUsername(userName:string) {
    return await this.usersRepository.createQueryBuilder('u').where("u.username= :username",{username:userName}).getOneOrFail();
  }
  async isSuperAdmin(id:string){
    if(id == '1' || id =='2'){
      return true;
    }
    return false;
  }
  async findOne(id: any)  {
    const { name } = id;
    const u  = await this.usersRepository.createQueryBuilder('user') 
    .where('user.id=2').getOneOrFail();
    // let all  =this.findAll();
    // console.log(all)
    // console.log(u)
    // const dataSource = new DataSource();
    // dataSource.manager.save(User);
    // const c = await getRepository(User).findOne({where:{
    //   name:'sc'
    // }});
    return  u ;
    // var s = this.usersRepository.find({
    //   where:{
    //     name:'sc'
    //   }
    // });
    // console.log(s[id])
    // return s ;
    // GetRepository
    // return this.usersRepository.findOne({where:name});
  }

  async remove(id: string): Promise<void> {
    await this.usersRepository.delete(id);
  }

}