import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("system_user_username_unique", ["username"], { unique: true })
@Entity("lg_system_user", { schema: "mineadmin" })
export class LgSystemUser {

  @PrimaryGeneratedColumn({
    type: "bigint",
    name: "id",
    comment: "用户ID，主键",
    unsigned: true,
  })
  id: string;

  @Column("varchar", {
    name: "username",
    unique: true,
    comment: "用户名",
    length: 20,
  })
  username: string;

  @Column("varchar", { name: "password", comment: "密码", length: 100 })
  password: string;

  @Column("varchar", {
    name: "user_type",
    nullable: true,
    comment: "用户类型：(100系统用户)",
    length: 3,
    default: () => "'100'",
  })
  userType: string | null;

  @Column("varchar", {
    name: "nickname",
    nullable: true,
    comment: "用户昵称",
    length: 30,
  })
  nickname: string | null;

  @Column("varchar", {
    name: "phone",
    nullable: true,
    comment: "手机",
    length: 11,
  })
  phone: string | null;

  @Column("varchar", {
    name: "email",
    nullable: true,
    comment: "用户邮箱",
    length: 50,
  })
  email: string | null;

  @Column("varchar", {
    name: "avatar",
    nullable: true,
    comment: "用户头像",
    length: 255,
  })
  avatar: string | null;

  @Column("varchar", {
    name: "signed",
    nullable: true,
    comment: "个人签名",
    length: 255,
  })
  signed: string | null;

  @Column("varchar", {
    name: "dashboard",
    nullable: true,
    comment: "后台首页类型",
    length: 100,
  })
  dashboard: string | null;

  @Column("smallint", {
    name: "status",
    nullable: true,
    comment: "状态 (1正常 2停用)",
    default: () => "'1'",
  })
  status: number | null;

  @Column("varchar", {
    name: "login_ip",
    nullable: true,
    comment: "最后登陆IP",
    length: 45,
  })
  loginIp: string | null;

  @Column("timestamp", {
    name: "login_time",
    nullable: true,
    comment: "最后登陆时间",
  })
  loginTime: Date | null;

  @Column("varchar", {
    name: "backend_setting",
    nullable: true,
    comment: "后台设置数据",
    length: 500,
  })
  backendSetting: string | null;

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
