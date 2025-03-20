import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Comment } from './entities/comment.entity';
import { Post } from '../post/entities/post.entity'; // Import Post entity
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { Response } from 'src/common/utils/response';

@Injectable()
export class CommentService {
  constructor(
    @InjectRepository(Comment)
    private commentRepository: Repository<Comment>,

    @InjectRepository(Post) // Inject Post repository
    private postRepository: Repository<Post>,
  ) {}

  // Create a new comment
  async create(createCommentDto: CreateCommentDto) {
    try {
      // Find the related post
      const post = await this.postRepository.findOneBy({ id: createCommentDto.postId });

      if (!post) {
        return Response.error(null, 'Post not found', 404);
      }

      // Create the comment and associate it with the found post
      const comment = this.commentRepository.create({
        ...createCommentDto,
        post: post, // Associate with post entity
      });

      const savedComment = await this.commentRepository.save(comment);
      return Response.success(savedComment, 'Comment created successfully');
    } catch (error) {
      return Response.error(error, 'Failed to create comment');
    }
  }

  // Get all comments
  async findAll() {
    try {
      const comments = await this.commentRepository.find({ relations: ['post'] });
      return Response.success(comments, 'Comments retrieved successfully');
    } catch (error) {
      return Response.error(error, 'Failed to retrieve comments');
    }
  }

  // Get a single comment by ID
  async findOne(id: number) {
    try {
      const comment = await this.commentRepository.findOne({ where: { id }, relations: ['post'] });
      if (!comment) {
        return Response.error(null, 'Comment not found', 404);
      }
      return Response.success(comment, 'Comment retrieved successfully');
    } catch (error) {
      return Response.error(error, 'Failed to retrieve comment');
    }
  }

  // Update a comment by ID
  async update(id: number, updateCommentDto: UpdateCommentDto) {
    try {
      const comment = await this.commentRepository.findOneBy({ id });
      if (!comment) {
        return Response.error(null, 'Comment not found', 404);
      }

      await this.commentRepository.update(id, updateCommentDto);
      const updatedComment = await this.commentRepository.findOneBy({ id });
      return Response.success(updatedComment, 'Comment updated successfully');
    } catch (error) {
      return Response.error(error, 'Failed to update comment');
    }
  }

  // Remove a comment by ID
  async remove(id: number) {
    try {
      const comment = await this.commentRepository.findOneBy({ id });
      if (!comment) {
        return Response.error(null, 'Comment not found', 404);
      }

      await this.commentRepository.delete(id);
      return Response.success(null, 'Comment deleted successfully');
    } catch (error) {
      return Response.error(error, 'Failed to delete comment');
    }
  }
}
