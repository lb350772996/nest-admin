import { Column, Entity } from "typeorm";

@Entity("lg_system_role_menu", { schema: "mineadmin" })
export class LgSystemRoleMenu {
  @Column("bigint", {
    primary: true,
    name: "role_id",
    comment: "角色主键",
    unsigned: true,
  })
  roleId: string;

  @Column("bigint", {
    primary: true,
    name: "menu_id",
    comment: "菜单主键",
    unsigned: true,
  })
  menuId: string;
}
