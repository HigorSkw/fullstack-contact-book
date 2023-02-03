import { Exclude } from "class-transformer";
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  OneToMany,
} from "typeorm";
import { Customer } from "./customer.entity";

@Entity()
export class User {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  @Exclude()
  password: string;

  @Column()
  telefone: string;

  @CreateDateColumn({
    name: "created_at",
  })
  created_at: Date;

  @OneToMany((type) => Customer, (customer) => customer.user, {
    eager: true,
    cascade: true,
  })
  customers: Customer[];
}
