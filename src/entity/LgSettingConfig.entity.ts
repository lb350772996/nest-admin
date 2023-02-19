import { Column, Entity, Index } from "typeorm";

@Index("setting_config_group_id_index", ["groupId"], {})
@Entity("lg_setting_config", { schema: "mineadmin" })
export class LgSettingConfig {
  @Column("bigint", { name: "group_id", comment: "组id" })
  groupId: string;

  @Column("varchar", {
    primary: true,
    name: "key",
    comment: "配置键名",
    length: 32,
  })
  key: string;

  @Column("varchar", {
    name: "value",
    nullable: true,
    comment: "配置值",
    length: 255,
  })
  value: string | null;

  @Column("varchar", {
    name: "name",
    nullable: true,
    comment: "配置名称",
    length: 255,
  })
  name: string | null;

  @Column("varchar", {
    name: "input_type",
    nullable: true,
    comment: "数据输入类型",
    length: 32,
  })
  inputType: string | null;

  @Column("varchar", {
    name: "config_select_data",
    nullable: true,
    comment: "配置选项数据",
    length: 500,
  })
  configSelectData: string | null;

  @Column("smallint", {
    name: "sort",
    nullable: true,
    comment: "排序",
    unsigned: true,
    default: () => "'0'",
  })
  sort: number | null;

  @Column("varchar", {
    name: "remark",
    nullable: true,
    comment: "备注",
    length: 255,
  })
  remark: string | null;
}
