import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { LgSystemUser } from 'src/entity/user.entity';
import internal from 'stream';
import { getRepository, Repository,Connection, DataSource } from 'typeorm';
import { User } from './user.entity';
import { compareSync, hashSync } from 'bcrypt';
import { NormalStatusException } from 'src/common/exception/normalstatus.exception';
import { BaseService } from '../base/base.service';

@Injectable()
export class UsersService extends BaseService {
  constructor(
    @InjectRepository(LgSystemUser)
    private usersRepository: Repository<LgSystemUser>,
    private connection: Connection,
  ) {
    super();
  }

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

  async update(id, dto){
    const userinfo = await this.findOne(id);
    userinfo.nickname = dto.nickname ? dto.nickname : userinfo.nickname;
    userinfo.phone = dto.phone ? dto.phone : userinfo.phone;
    userinfo.email = dto.email ? dto.email : userinfo.email;
    userinfo.signed = dto.signed ? dto.signed : userinfo.signed;
    userinfo.updatedAt = dto.updatedAt ? dto.updatedAt : userinfo.updatedAt;

    await this.usersRepository.save(userinfo);

    this.consoleLog(userinfo.id)

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
    .where('user.id=:id',{id:id}).getOneOrFail();
    return  u ;
  }

  async remove(id: string): Promise<void> {
    await this.usersRepository.delete(id);
  }

}