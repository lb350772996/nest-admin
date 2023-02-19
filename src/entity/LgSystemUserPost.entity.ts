import { Column, Entity } from "typeorm";

@Entity("lg_system_user_post", { schema: "mineadmin" })
export class LgSystemUserPost {
  @Column("bigint", {
    primary: true,
    name: "user_id",
    comment: "用户主键",
    unsigned: true,
  })
  userId: string;

  @Column("bigint", {
    primary: true,
    name: "post_id",
    comment: "岗位主键",
    unsigned: true,
  })
  postId: string;
}
