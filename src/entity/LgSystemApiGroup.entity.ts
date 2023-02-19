import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("lg_system_api_group", { schema: "mineadmin" })
export class LgSystemApiGroup {
  @PrimaryGeneratedColumn({
    type: "bigint",
    name: "id",
    comment: "主键",
    unsigned: true,
  })
  id: string;

  @Column("varchar", { name: "name", comment: "接口组名称", length: 32 })
  name: string;

  @Column("smallint", {
    name: "status",
    nullable: true,
    comment: "状态 (1正常 2停用)",
    default: () => "'1'",
  })
  status: number | null;

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
