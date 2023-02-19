import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({name:'user'})
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  password: string;

//   @Column({ default: true })
//   isActive: boolean;
}