import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm'; 
import { Post } from '../posts/post.entity';


export enum UserRole {
ADMIN = "admin",
AUTHOR = "author",
}

@Entity() 
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
        type: "enum",
        enum: UserRole,
        default: UserRole
    })
    role: UserRole

  @Column({ default: true })
  isActive: boolean;
  
  @OneToMany(type => Post,  => post.user)
  posts: Post[];
