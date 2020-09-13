import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { User } from '../users/user.entity';



@Entity() 
export class Post {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  text: string;
  @OneToMany(type => Comment, comment => comment)
  comment: string[];
  
}
