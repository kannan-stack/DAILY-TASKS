import { Entity } from "typeorm";
import { PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

@Entity()
export class User{
    @PrimaryGeneratedColumn()
    user_id: number

    @Column()
    username: string 

    @Column()
    age: number 

    @Column()
    gender: string

    @Column()
    place: string
}