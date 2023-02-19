import { Column, Entity } from "typeorm";

@Entity("lg_system_user_role", { schema: "mineadmin" })
export class LgSystemUserRole {
  @Column("bigint", {
    primary: true,
    name: "user_id",
    comment: "用户主键",
    unsigned: true,
  })
  userId: string;

  @Column("bigint", {
    primary: true,
    name: "role_id",
    comment: "角色主键",
    unsigned: true,
  })
  roleId: string;
}
