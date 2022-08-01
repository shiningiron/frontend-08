import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";

@Entity()
export class Product extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  _id!: string;

  @PrimaryGeneratedColumn("increment")
  number!: number;

  @Column({ type: "text" })
  seller!: string;

  @Column({ type: "text" })
  name!: string;

  @Column({ type: "text" })
  detail!: string;

  @Column({ type: "text" })
  price!: number;

  @Column({ type: "timestamp", default: new Date() })
  createdAt!: Date;

  @Column({ type: "timestamp", default: new Date(), nullable: true })
  deletedAt!: Date;
}
