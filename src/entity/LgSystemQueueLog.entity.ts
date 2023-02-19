import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("lg_system_queue_log", { schema: "mineadmin" })
export class LgSystemQueueLog {
  @PrimaryGeneratedColumn({
    type: "bigint",
    name: "id",
    comment: "主键",
    unsigned: true,
  })
  id: string;

  @Column("varchar", {
    name: "exchange_name",
    comment: "交换机名称",
    length: 32,
  })
  exchangeName: string;

  @Column("varchar", {
    name: "routing_key_name",
    comment: "路由名称",
    length: 32,
  })
  routingKeyName: string;

  @Column("varchar", { name: "queue_name", comment: "队列名称", length: 64 })
  queueName: string;

  @Column("longtext", {
    name: "queue_content",
    nullable: true,
    comment: "队列数据",
  })
  queueContent: string | null;

  @Column("text", { name: "log_content", nullable: true, comment: "队列日志" })
  logContent: string | null;

  @Column("smallint", {
    name: "produce_status",
    nullable: true,
    comment: "生产状态 1:未生产 2:生产中 3:生产成功 4:生产失败 5:生产重复",
    default: () => "'1'",
  })
  produceStatus: number | null;

  @Column("smallint", {
    name: "consume_status",
    nullable: true,
    comment: "消费状态 1:未消费 2:消费中 3:消费成功 4:消费失败 5:消费重复",
    default: () => "'1'",
  })
  consumeStatus: number | null;

  @Column("int", {
    name: "delay_time",
    comment: "延迟时间（秒）",
    unsigned: true,
  })
  delayTime: number;

  @Column("bigint", { name: "created_by", nullable: true, comment: "创建者" })
  createdBy: string | null;

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
}
