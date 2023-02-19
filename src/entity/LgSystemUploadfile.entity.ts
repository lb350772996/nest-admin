import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("system_uploadfile_hash_unique", ["hash"], { unique: true })
@Index("system_uploadfile_storage_path_index", ["storagePath"], {})
@Entity("lg_system_uploadfile", { schema: "mineadmin" })
export class LgSystemUploadfile {
  @PrimaryGeneratedColumn({
    type: "bigint",
    name: "id",
    comment: "主键",
    unsigned: true,
  })
  id: string;

  @Column("smallint", {
    name: "storage_mode",
    nullable: true,
    comment: "存储模式 (1 本地 2 阿里云 3 七牛云 4 腾讯云)",
    default: () => "'1'",
  })
  storageMode: number | null;

  @Column("varchar", {
    name: "origin_name",
    nullable: true,
    comment: "原文件名",
    length: 255,
  })
  originName: string | null;

  @Column("varchar", {
    name: "object_name",
    nullable: true,
    comment: "新文件名",
    length: 50,
  })
  objectName: string | null;

  @Column("varchar", {
    name: "hash",
    nullable: true,
    unique: true,
    comment: "文件hash",
    length: 64,
  })
  hash: string | null;

  @Column("varchar", {
    name: "mime_type",
    nullable: true,
    comment: "资源类型",
    length: 255,
  })
  mimeType: string | null;

  @Column("varchar", {
    name: "storage_path",
    nullable: true,
    comment: "存储目录",
    length: 100,
  })
  storagePath: string | null;

  @Column("varchar", {
    name: "suffix",
    nullable: true,
    comment: "文件后缀",
    length: 10,
  })
  suffix: string | null;

  @Column("bigint", { name: "size_byte", nullable: true, comment: "字节数" })
  sizeByte: string | null;

  @Column("varchar", {
    name: "size_info",
    nullable: true,
    comment: "文件大小",
    length: 50,
  })
  sizeInfo: string | null;

  @Column("varchar", {
    name: "url",
    nullable: true,
    comment: "url地址",
    length: 255,
  })
  url: string | null;

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
