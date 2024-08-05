import { Entity } from "typeorm";
import { Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Manager {
  @PrimaryGeneratedColumn({ type: "int", name: "manager_id" })
  managerId?: string;

  @Column({ type: "varchar", name: "manager_name" })
  managerName: string;

  @Column({ type: "varchar", name: "manager_email" })
  managerEmail: string;

  @Column({ type: "int", name: "manager_phone" })
  managerPhone: string;
}
