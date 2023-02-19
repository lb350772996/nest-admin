import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("lg_setting_generate_tables", { schema: "mineadmin" })
export class LgSettingGenerateTables {
  @PrimaryGeneratedColumn({
    type: "bigint",
    name: "id",
    comment: "主键",
    unsigned: true,
  })
  id: string;

  @Column("varchar", {
    name: "table_name",
    nullable: true,
    comment: "表名称",
    length: 200,
  })
  tableName: string | null;

  @Column("varchar", {
    name: "table_comment",
    nullable: true,
    comment: "表注释",
    length: 500,
  })
  tableComment: string | null;

  @Column("varchar", {
    name: "module_name",
    nullable: true,
    comment: "所属模块",
    length: 100,
  })
  moduleName: string | null;

  @Column("varchar", {
    name: "namespace",
    nullable: true,
    comment: "命名空间",
    length: 255,
  })
  namespace: string | null;

  @Column("varchar", {
    name: "menu_name",
    nullable: true,
    comment: "生成菜单名",
    length: 100,
  })
  menuName: string | null;

  @Column("bigint", {
    name: "belong_menu_id",
    nullable: true,
    comment: "所属菜单",
  })
  belongMenuId: string | null;

  @Column("varchar", {
    name: "package_name",
    nullable: true,
    comment: "控制器包名",
    length: 100,
  })
  packageName: string | null;

  @Column("varchar", {
    name: "type",
    nullable: true,
    comment: "生成类型，single 单表CRUD，tree 树表CRUD，parent_sub父子表CRUD",
    length: 100,
  })
  type: string | null;

  @Column("smallint", {
    name: "generate_type",
    nullable: true,
    comment: "1 压缩包下载 2 生成到模块",
    default: () => "'1'",
  })
  generateType: number | null;

  @Column("varchar", {
    name: "generate_menus",
    nullable: true,
    comment: "生成菜单列表",
    length: 255,
  })
  generateMenus: string | null;

  @Column("smallint", {
    name: "build_menu",
    nullable: true,
    comment: "是否构建菜单",
    default: () => "'1'",
  })
  buildMenu: number | null;

  @Column("smallint", {
    name: "component_type",
    nullable: true,
    comment: "组件显示方式",
    default: () => "'1'",
  })
  componentType: number | null;

  @Column("varchar", {
    name: "options",
    nullable: true,
    comment: "其他业务选项",
    length: 1500,
  })
  options: string | null;

  @Column("bigint", { name: "created_by", nullable: true, comment: "创建者" })
  createdBy: string | null;

  @Column("bigint", { name: "updated_by", nullable: true, comment: "更新者" })
  updatedBy: string | null;

  @Column("timestamp", {
    name: "created_at",
    nullable: true,
    comment: "创建时间",
  })
  createdAt: Date | null;

  @Column("timestamp", {
    name: "updated_at",
    nullable: true,
    comment: "更新时间",
  })
  updatedAt: Date | null;

  @Column("varchar", {
    name: "remark",
    nullable: true,
    comment: "备注",
    length: 255,
  })
  remark: string | null;
}
