import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index(
  "system_app_group_id_app_id_app_secret_index",
  ["groupId", "appId", "appSecret"],
  {}
)
@Entity("lg_system_app", { schema: "mineadmin" })
export class LgSystemApp {
  @PrimaryGeneratedColumn({
    type: "bigint",
    name: "id",
    comment: "主键",
    unsigned: true,
  })
  id: string;

  @Column("bigint", { name: "group_id", comment: "应用组ID", unsigned: true })
  groupId: string;

  @Column("varchar", { name: "app_name", comment: "应用名称", length: 32 })
  appName: string;

  @Column("varchar", { name: "app_id", comment: "应用ID", length: 16 })
  appId: string;

  @Column("varchar", { name: "app_secret", comment: "应用密钥", length: 128 })
  appSecret: string;

  @Column("smallint", {
    name: "status",
    nullable: true,
    comment: "状态 (1正常 2停用)",
    default: () => "'1'",
  })
  status: number | null;

  @Column("text", { name: "description", nullable: true, comment: "应用介绍" })
  description: string | null;

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
