import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('posts')
export class Post {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 255 }) // Set max length for performance optimization
    title: string;

    @Column({ type: 'text' }) // Use 'text' for long content
    content: string;

    @CreateDateColumn({ type: 'timestamp' }) // Automatically handles creation timestamp
    createdAt: Date;

    @UpdateDateColumn({ type: 'timestamp' }) // Automatically updates timestamp on change
    updatedAt: Date;
}
