import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('user')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

//   @Column()
//   lastName: string;

//   @Column({ default: true })
//   isActive: boolean;
}