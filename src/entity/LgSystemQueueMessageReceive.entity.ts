import { Column, Entity } from "typeorm";

@Entity("lg_system_queue_message_receive", { schema: "mineadmin" })
export class LgSystemQueueMessageReceive {
  @Column("bigint", {
    primary: true,
    name: "message_id",
    comment: "队列消息主键",
    unsigned: true,
  })
  messageId: string;

  @Column("bigint", {
    primary: true,
    name: "user_id",
    comment: "接收用户主键",
    unsigned: true,
  })
  userId: string;

  @Column("smallint", {
    name: "read_status",
    nullable: true,
    comment: "已读状态 (1未读 2已读)",
    default: () => "'1'",
  })
  readStatus: number | null;
}
