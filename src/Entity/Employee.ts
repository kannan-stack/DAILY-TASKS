import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("employee")
export class Employee {
  @PrimaryGeneratedColumn({ type: "int", name: "emp_id" })
  empId?: number;

  @Column({ type: "varchar", name: "emp_name" })
  empName: string;

  @Column({ type: "float", name: "emp_salary" })
  empSalary: number;

  @Column({ type: "varchar", name: "emp_email" })
  empEmail: string;

  @Column({ type: "varchar", name: "emp_gender" })
  empGender: string;

  @Column({ type: "varchar", name: "emp_place" })
  empPlace: string;

  @Column({ type: "int", name: "emp_phone" })
  empPhone: number;

  @Column({ type: "boolean", name: "emp_active" })
  empActive: boolean;
}
