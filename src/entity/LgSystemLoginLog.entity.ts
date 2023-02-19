import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("system_login_log_username_index", ["username"], {})
@Entity("lg_system_login_log", { schema: "mineadmin" })
export class LgSystemLoginLog {
  @PrimaryGeneratedColumn({
    type: "bigint",
    name: "id",
    comment: "主键",
    unsigned: true,
  })
  id: string;

  @Column("varchar", { name: "username", comment: "用户名", length: 20 })
  username: string;

  @Column("varchar", {
    name: "ip",
    nullable: true,
    comment: "登录IP地址",
    length: 45,
  })
  ip: string | null;

  @Column("varchar", {
    name: "ip_location",
    nullable: true,
    comment: "IP所属地",
    length: 255,
  })
  ipLocation: string | null;

  @Column("varchar", {
    name: "os",
    nullable: true,
    comment: "操作系统",
    length: 50,
  })
  os: string | null;

  @Column("varchar", {
    name: "browser",
    nullable: true,
    comment: "浏览器",
    length: 50,
  })
  browser: string | null;

  @Column("smallint", {
    name: "status",
    comment: "登录状态 (1成功 2失败)",
    default: () => "'1'",
  })
  status: number;

  @Column("varchar", {
    name: "message",
    nullable: true,
    comment: "提示消息",
    length: 50,
  })
  message: string | null;

  @Column("timestamp", { name: "login_time", comment: "登录时间" })
  loginTime:  string;

  @Column("varchar", {
    name: "remark",
    nullable: true,
    comment: "备注",
    length: 255,
  })
  remark: string | null;
}
