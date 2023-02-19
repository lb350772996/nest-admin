import { Column, Entity } from "typeorm";

@Entity("lg_system_role_dept", { schema: "mineadmin" })
export class LgSystemRoleDept {
  @Column("bigint", {
    primary: true,
    name: "role_id",
    comment: "角色主键",
    unsigned: true,
  })
  roleId: string;

  @Column("bigint", {
    primary: true,
    name: "dept_id",
    comment: "部门主键",
    unsigned: true,
  })
  deptId: string;
}
