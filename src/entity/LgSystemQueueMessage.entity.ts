import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("system_queue_message_content_type_index", ["contentType"], {})
@Entity("lg_system_queue_message", { schema: "mineadmin" })
export class LgSystemQueueMessage {
  @PrimaryGeneratedColumn({
    type: "bigint",
    name: "id",
    comment: "主键",
    unsigned: true,
  })
  id: string;

  @Column("bigint", {
    name: "content_id",
    nullable: true,
    comment: "内容ID",
    unsigned: true,
  })
  contentId: string | null;

  @Column("varchar", {
    name: "content_type",
    nullable: true,
    comment: "内容类型",
    length: 64,
  })
  contentType: string | null;

  @Column("varchar", {
    name: "title",
    nullable: true,
    comment: "消息标题",
    length: 255,
  })
  title: string | null;

  @Column("bigint", {
    name: "send_by",
    nullable: true,
    comment: "发送人",
    unsigned: true,
  })
  sendBy: string | null;

  @Column("longtext", { name: "content", nullable: true, comment: "消息内容" })
  content: string | null;

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
