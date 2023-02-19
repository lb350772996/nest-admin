import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("lg_setting_crontab_log", { schema: "mineadmin" })
export class LgSettingCrontabLog {
  @PrimaryGeneratedColumn({
    type: "bigint",
    name: "id",
    comment: "主键",
    unsigned: true,
  })
  id: string;

  @Column("bigint", { name: "crontab_id", comment: "任务ID", unsigned: true })
  crontabId: string;

  @Column("varchar", {
    name: "name",
    nullable: true,
    comment: "任务名称",
    length: 255,
  })
  name: string | null;

  @Column("varchar", {
    name: "target",
    nullable: true,
    comment: "任务调用目标字符串",
    length: 500,
  })
  target: string | null;

  @Column("varchar", {
    name: "parameter",
    nullable: true,
    comment: "任务调用参数",
    length: 1000,
  })
  parameter: string | null;

  @Column("varchar", {
    name: "exception_info",
    nullable: true,
    comment: "异常信息",
    length: 2000,
  })
  exceptionInfo: string | null;

  @Column("smallint", {
    name: "status",
    nullable: true,
    comment: "执行状态 (1成功 2失败)",
    default: () => "'1'",
  })
  status: number | null;

  @Column("timestamp", {
    name: "created_at",
    nullable: true,
    comment: "创建时间",
  })
  createdAt: Date | null;
}
