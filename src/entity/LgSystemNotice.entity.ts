import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("system_notice_message_id_index", ["messageId"], {})
@Entity("lg_system_notice", { schema: "mineadmin" })
export class LgSystemNotice {
  @PrimaryGeneratedColumn({
    type: "bigint",
    name: "id",
    comment: "主键",
    unsigned: true,
  })
  id: string;

  @Column("bigint", { name: "message_id", comment: "消息ID" })
  messageId: string;

  @Column("varchar", { name: "title", comment: "标题", length: 255 })
  title: string;

  @Column("smallint", { name: "type", comment: "公告类型（1通知 2公告）" })
  type: number;

  @Column("text", { name: "content", nullable: true, comment: "公告内容" })
  content: string | null;

  @Column("int", {
    name: "click_num",
    nullable: true,
    comment: "浏览次数",
    default: () => "'0'",
  })
  clickNum: number | null;

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
