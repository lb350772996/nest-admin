import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("lg_system_role", { schema: "mineadmin" })
export class LgSystemRole {
  @PrimaryGeneratedColumn({
    type: "bigint",
    name: "id",
    comment: "主键",
    unsigned: true,
  })
  id: string;

  @Column("varchar", { name: "name", comment: "角色名称", length: 30 })
  name: string;

  @Column("varchar", { name: "code", comment: "角色代码", length: 100 })
  code: string;

  @Column("smallint", {
    name: "data_scope",
    nullable: true,
    comment:
      "数据范围（1：全部数据权限 2：自定义数据权限 3：本部门数据权限 4：本部门及以下数据权限 5：本人数据权限）",
    default: () => "'1'",
  })
  dataScope: number | null;

  @Column("smallint", {
    name: "status",
    nullable: true,
    comment: "状态 (1正常 2停用)",
    default: () => "'1'",
  })
  status: number | null;

  @Column("smallint", {
    name: "sort",
    nullable: true,
    comment: "排序",
    unsigned: true,
    default: () => "'0'",
  })
  sort: number | null;

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

  @Column("timestamp", {
    name: "deleted_at",
    nullable: true,
    comment: "删除时间",
  })
  deletedAt: Date | null;

  @Column("varchar", {
    name: "remark",
    nullable: true,
    comment: "备注",
    length: 255,
  })
  remark: string | null;
}
