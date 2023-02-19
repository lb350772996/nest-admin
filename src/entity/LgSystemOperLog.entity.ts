import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("system_oper_log_username_index", ["username"], {})
@Entity("lg_system_oper_log", { schema: "mineadmin" })
export class LgSystemOperLog {
  @PrimaryGeneratedColumn({
    type: "bigint",
    name: "id",
    comment: "主键",
    unsigned: true,
  })
  id: string;

  @Column("varchar", { name: "username", comment: "用户名", length: 20 })
  username: string;

  @Column("varchar", { name: "method", comment: "请求方式", length: 20 })
  method: string;

  @Column("varchar", { name: "router", comment: "请求路由", length: 500 })
  router: string;

  @Column("varchar", { name: "service_name", comment: "业务名称", length: 30 })
  serviceName: string;

  @Column("varchar", {
    name: "ip",
    nullable: true,
    comment: "请求IP地址",
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

  @Column("text", { name: "request_data", nullable: true, comment: "请求数据" })
  requestData: string | null;

  @Column("varchar", {
    name: "response_code",
    nullable: true,
    comment: "响应状态码",
    length: 5,
  })
  responseCode: string | null;

  @Column("text", {
    name: "response_data",
    nullable: true,
    comment: "响应数据",
  })
  responseData: string | null;

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
