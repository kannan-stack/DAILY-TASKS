import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

 @Entity()
 export class Author{

    @PrimaryGeneratedColumn()
    author_id : number

    @Column({
        length : 20
    })
    author_name : string

    @Column("text")
    description : string

    @Column()
    books : string

    @Column()
    isPublished : boolean
 }