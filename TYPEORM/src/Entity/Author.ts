import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity('AuthorInfo')
export class Author {
  @PrimaryGeneratedColumn()
  authorId: number;

  @Column()
  authorName: string;

  @Column()
  description: string;

  @Column()
  books: string;
}
