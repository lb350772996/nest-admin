import { Column, Entity } from "typeorm";

@Entity("lg_system_dept_leader", { schema: "mineadmin" })
export class LgSystemDeptLeader {
  @Column("bigint", {
    primary: true,
    name: "dept_id",
    comment: "部门主键",
    unsigned: true,
  })
  deptId: string;

  @Column("bigint", {
    primary: true,
    name: "user_id",
    comment: "用户主键",
    unsigned: true,
  })
  userId: string;

  @Column("varchar", { name: "username", comment: "用户名", length: 20 })
  username: string;

  @Column("timestamp", { name: "created_at", comment: "添加时间" })
  createdAt: Date;
}
