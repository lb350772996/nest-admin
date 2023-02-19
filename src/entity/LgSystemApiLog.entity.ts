import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("system_api_log_api_id_index", ["apiId"], {})
@Entity("lg_system_api_log", { schema: "mineadmin" })
export class LgSystemApiLog {
  @PrimaryGeneratedColumn({
    type: "bigint",
    name: "id",
    comment: "主键",
    unsigned: true,
  })
  id: string;

  @Column("bigint", { name: "api_id", comment: "api ID", unsigned: true })
  apiId: string;

  @Column("varchar", { name: "api_name", comment: "接口名称", length: 32 })
  apiName: string;

  @Column("varchar", {
    name: "access_name",
    comment: "接口访问名称",
    length: 64,
  })
  accessName: string;

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

  @Column("varchar", {
    name: "ip",
    nullable: true,
    comment: "访问IP地址",
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

  @Column("timestamp", {
    name: "access_time",
    nullable: true,
    comment: "访问时间",
  })
  accessTime: Date | null;

  @Column("varchar", {
    name: "remark",
    nullable: true,
    comment: "备注",
    length: 255,
  })
  remark: string | null;
}
