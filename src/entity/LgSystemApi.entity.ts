import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("system_api_access_name_index", ["accessName"], {})
@Index("system_api_group_id_index", ["groupId"], {})
@Entity("lg_system_api", { schema: "mineadmin" })
export class LgSystemApi {
  @PrimaryGeneratedColumn({
    type: "bigint",
    name: "id",
    comment: "主键",
    unsigned: true,
  })
  id: string;

  @Column("bigint", { name: "group_id", comment: "接口组ID", unsigned: true })
  groupId: string;

  @Column("varchar", { name: "name", comment: "接口名称", length: 32 })
  name: string;

  @Column("varchar", {
    name: "access_name",
    comment: "接口访问名称",
    length: 64,
  })
  accessName: string;

  @Column("varchar", { name: "class_name", comment: "类命名空间", length: 128 })
  className: string;

  @Column("varchar", { name: "method_name", comment: "方法名", length: 128 })
  methodName: string;

  @Column("smallint", {
    name: "auth_mode",
    comment: "认证模式 (1简易 2复杂)",
    default: () => "'1'",
  })
  authMode: number;

  @Column("char", {
    name: "request_mode",
    comment: "请求模式 (A 所有 P POST G GET)",
    length: 1,
    default: () => "'A'",
  })
  requestMode: string;

  @Column("text", {
    name: "description",
    nullable: true,
    comment: "接口说明介绍",
  })
  description: string | null;

  @Column("text", { name: "response", nullable: true, comment: "返回内容示例" })
  response: string | null;

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
