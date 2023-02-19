import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("user", { schema: "mineadmin" })
export class User {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "name", length: 255 })
  name: string;

  @Column("varchar", { name: "password", length: 255 })
  password: string;
}
