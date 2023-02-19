import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("lg_setting_generate_columns", { schema: "mineadmin" })
export class LgSettingGenerateColumns {
  @PrimaryGeneratedColumn({
    type: "bigint",
    name: "id",
    comment: "主键",
    unsigned: true,
  })
  id: string;

  @Column("bigint", { name: "table_id", comment: "所属表ID", unsigned: true })
  tableId: string;

  @Column("varchar", {
    name: "column_name",
    nullable: true,
    comment: "字段名称",
    length: 200,
  })
  columnName: string | null;

  @Column("varchar", {
    name: "column_comment",
    nullable: true,
    comment: "字段注释",
    length: 255,
  })
  columnComment: string | null;

  @Column("varchar", {
    name: "column_type",
    nullable: true,
    comment: "字段类型",
    length: 50,
  })
  columnType: string | null;

  @Column("smallint", {
    name: "is_pk",
    nullable: true,
    comment: "1 非主键 2 主键",
    default: () => "'1'",
  })
  isPk: number | null;

  @Column("smallint", {
    name: "is_required",
    nullable: true,
    comment: "1 非必填 2 必填",
    default: () => "'1'",
  })
  isRequired: number | null;

  @Column("smallint", {
    name: "is_insert",
    nullable: true,
    comment: "1 非插入字段 2 插入字段",
    default: () => "'1'",
  })
  isInsert: number | null;

  @Column("smallint", {
    name: "is_edit",
    nullable: true,
    comment: "1 非编辑字段 2 编辑字段",
    default: () => "'1'",
  })
  isEdit: number | null;

  @Column("smallint", {
    name: "is_list",
    nullable: true,
    comment: "1 非列表显示字段 2 列表显示字段",
    default: () => "'1'",
  })
  isList: number | null;

  @Column("smallint", {
    name: "is_query",
    nullable: true,
    comment: "1 非查询字段 2 查询字段",
    default: () => "'1'",
  })
  isQuery: number | null;

  @Column("smallint", {
    name: "is_sort",
    nullable: true,
    comment: "1 不排序 2 排序字段",
    default: () => "'1'",
  })
  isSort: number | null;

  @Column("varchar", {
    name: "query_type",
    nullable: true,
    comment: "查询方式 eq 等于, neq 不等于, gt 大于, lt 小于, like 范围",
    length: 100,
    default: () => "'eq'",
  })
  queryType: string | null;

  @Column("varchar", {
    name: "view_type",
    nullable: true,
    comment:
      "页面控件，text, textarea, password, select, checkbox, radio, date, upload, ma-upload（封装的上传控件）",
    length: 100,
    default: () => "'text'",
  })
  viewType: string | null;

  @Column("varchar", {
    name: "dict_type",
    nullable: true,
    comment: "字典类型",
    length: 200,
  })
  dictType: string | null;

  @Column("varchar", {
    name: "allow_roles",
    nullable: true,
    comment: "允许查看该字段的角色",
    length: 255,
  })
  allowRoles: string | null;

  @Column("varchar", {
    name: "options",
    nullable: true,
    comment: "字段其他设置",
    length: 1000,
  })
  options: string | null;

  @Column("tinyint", {
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

  @Column("varchar", {
    name: "remark",
    nullable: true,
    comment: "备注",
    length: 255,
  })
  remark: string | null;
}
