import { Column, Entity } from "typeorm";

@Entity("lg_system_app_api", { schema: "mineadmin" })
export class LgSystemAppApi {
  @Column("bigint", {
    primary: true,
    name: "app_id",
    comment: "应用ID",
    unsigned: true,
  })
  appId: string;

  @Column("bigint", {
    primary: true,
    name: "api_id",
    comment: "API—ID",
    unsigned: true,
  })
  apiId: string;
}
