import { Column, Entity } from "typeorm";

@Entity("lg_system_user_dept", { schema: "mineadmin" })
export class LgSystemUserDept {
  @Column("bigint", {
    primary: true,
    name: "user_id",
    comment: "用户主键",
    unsigned: true,
  })
  userId: string;

  @Column("bigint", {
    primary: true,
    name: "dept_id",
    comment: "部门主键",
    unsigned: true,
  })
  deptId: string;
}
