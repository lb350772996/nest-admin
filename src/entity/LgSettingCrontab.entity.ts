import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("lg_setting_crontab", { schema: "mineadmin" })
export class LgSettingCrontab {
  @PrimaryGeneratedColumn({
    type: "bigint",
    name: "id",
    comment: "主键",
    unsigned: true,
  })
  id: string;

  @Column("varchar", {
    name: "name",
    nullable: true,
    comment: "任务名称",
    length: 100,
  })
  name: string | null;

  @Column("smallint", {
    name: "type",
    nullable: true,
    comment: "任务类型 (1 command, 2 class, 3 url, 4 eval)",
    default: () => "'4'",
  })
  type: number | null;

  @Column("varchar", {
    name: "target",
    nullable: true,
    comment: "调用任务字符串",
    length: 500,
  })
  target: string | null;

  @Column("varchar", {
    name: "parameter",
    nullable: true,
    comment: "调用任务参数",
    length: 1000,
  })
  parameter: string | null;

  @Column("varchar", {
    name: "rule",
    nullable: true,
    comment: "任务执行表达式",
    length: 32,
  })
  rule: string | null;

  @Column("smallint", {
    name: "singleton",
    nullable: true,
    comment: "是否单次执行 (1 是 2 不是)",
    default: () => "'1'",
  })
  singleton: number | null;

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

  @Column("varchar", {
    name: "remark",
    nullable: true,
    comment: "备注",
    length: 255,
  })
  remark: string | null;
}
