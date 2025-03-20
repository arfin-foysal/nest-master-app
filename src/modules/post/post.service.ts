import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Post } from './entities/post.entity';
import { CreatePostDto } from './dto/create-post.dto';
import { Response } from 'src/common/utils/response';


@Injectable()
export class PostService {
  constructor(
    @InjectRepository(Post)
    private postRepository: Repository<Post>,
  ) {}

  async create(createPostDto: CreatePostDto) {
    try {
      const post = this.postRepository.create(createPostDto);
      const savedPost = await this.postRepository.save(post);
      return Response.success(savedPost, 'Post created successfully');
    } catch (error) {
      return Response.error(error, 'Failed to create post');
    }
  }

  async findAll() {
    try {
      const posts = await this.postRepository.find();
      return Response.success(posts, 'Posts retrieved successfully');
    } catch (error) {
      return Response.error(error, 'Failed to retrieve posts');
    }
  }

  async findOne(id: number) {
    try {
      const post = await this.postRepository.findOneBy({ id });
      if (!post) {
        return Response.error(null, 'Post not found', 404);
      }
      return Response.success(post, 'Post retrieved successfully');
    } catch (error) {
      return Response.error(error, 'Failed to retrieve post');
    }
  }

  async update(id: number, createPostDto: CreatePostDto) {
    try {
      const post = await this.postRepository.findOneBy({ id });
      if (!post) {
        return Response.error(null, 'Post not found', 404);
      }
      await this.postRepository.update(id, createPostDto);
      const updatedPost = await this.postRepository.findOneBy({ id });
      return Response.success(updatedPost, 'Post updated successfully');
    } catch (error) {
      return Response.error(error, 'Failed to update post');
    }
  }

  async remove(id: number) {
    try {
      const post = await this.postRepository.findOneBy({ id });
      if (!post) {
        return Response.error(null, 'Post not found', 404);
      }
      await this.postRepository.delete(id);
      return Response.success(null, 'Post deleted successfully');
    } catch (error) {
      return Response.error(error, 'Failed to delete post');
    }
  }
}
