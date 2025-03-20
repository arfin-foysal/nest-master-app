import { Post } from 'src/modules/post/entities/post.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';

@Entity({ name: 'comments' })
export class Comment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  content: string;

  @ManyToOne(() => Post, (post) => post.comments)  // Fix relation here
  @JoinColumn({ name: 'postId' })
  post: Post;

  @Column({ default: new Date() })
  createdAt: Date;
}
