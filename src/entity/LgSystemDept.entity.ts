import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("system_dept_parent_id_index", ["parentId"], {})
@Entity("lg_system_dept", { schema: "mineadmin" })
export class LgSystemDept {
  @PrimaryGeneratedColumn({
    type: "bigint",
    name: "id",
    comment: "主键",
    unsigned: true,
  })
  id: string;

  @Column("bigint", { name: "parent_id", comment: "父ID", unsigned: true })
  parentId: string;

  @Column("varchar", { name: "level", comment: "组级集合", length: 500 })
  level: string;

  @Column("varchar", { name: "name", comment: "部门名称", length: 30 })
  name: string;

  @Column("varchar", {
    name: "leader",
    nullable: true,
    comment: "负责人",
    length: 20,
  })
  leader: string | null;

  @Column("varchar", {
    name: "phone",
    nullable: true,
    comment: "联系电话",
    length: 11,
  })
  phone: string | null;

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
