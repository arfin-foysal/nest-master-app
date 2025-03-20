import { UUID } from 'crypto';
import { Post } from 'src/modules/post/entities/post.entity';
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToMany } from 'typeorm';

@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn()
  id?: UUID;

  @OneToMany(() => Post, (post) => post.createdBy)
  posts: Post[];

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  name: string;

  @Column()
  phone: string;
  
  @Column({ nullable: true })
  avatar?: string;

  @CreateDateColumn({ type: 'timestamp' })  // **অটোমেটিক createdAt সেট করবে**
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp' })  // **updatedAt অটো-আপডেট হবে**
  updatedAt: Date


}
