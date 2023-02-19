import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index(
  "system_api_column_api_id_type_status_index",
  ["apiId", "type", "status"],
  {}
)
@Entity("lg_system_api_column", { schema: "mineadmin" })
export class LgSystemApiColumn {
  @PrimaryGeneratedColumn({
    type: "bigint",
    name: "id",
    comment: "主键",
    unsigned: true,
  })
  id: string;

  @Column("bigint", { name: "api_id", comment: "接口主键", unsigned: true })
  apiId: string;

  @Column("varchar", { name: "name", comment: "字段名称", length: 64 })
  name: string;

  @Column("smallint", {
    name: "type",
    comment: "字段类型 1 请求 2 返回",
    default: () => "'1'",
  })
  type: number;

  @Column("varchar", { name: "data_type", comment: "数据类型", length: 16 })
  dataType: string;

  @Column("smallint", {
    name: "is_required",
    comment: "是否必填 1 非必填 2 必填",
    default: () => "'1'",
  })
  isRequired: number;

  @Column("varchar", {
    name: "default_value",
    nullable: true,
    comment: "默认值",
    length: 500,
  })
  defaultValue: string | null;

  @Column("smallint", {
    name: "status",
    nullable: true,
    comment: "状态 (1正常 2停用)",
    default: () => "'1'",
  })
  status: number | null;

  @Column("varchar", {
    name: "description",
    nullable: true,
    comment: "字段说明",
    length: 500,
  })
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
