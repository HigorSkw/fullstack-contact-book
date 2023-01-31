import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  CreateDateColumn,
} from "typeorm";
import { User } from "./user.entity";

@Entity()
export class Customer {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  telefone: string;

  @CreateDateColumn({
    name: "created_at",
  })
  created_at: Date;

  @ManyToOne((type) => User, (user) => user.customer)
  user: User;
}
