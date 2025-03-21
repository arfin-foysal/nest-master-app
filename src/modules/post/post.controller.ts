import { Controller, Get, Post, Body, Param, Put, Delete ,Request} from '@nestjs/common';
import { PostService } from './post.service';
import { CreatePostDto } from './dto/create-post.dto';
import { Public } from '../auth/decorators/public.decorator';


@Controller('posts')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Post()
  async create(@Body() createPostDto: CreatePostDto, @Request() req) {
    const userId = req.user.id;
    return await this.postService.create(createPostDto, userId);
  }

  @Get()
  async findAll() {
    return await this.postService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return await this.postService.findOne(id);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() createPostDto: CreatePostDto) {
    return await this.postService.update(id, createPostDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    return await this.postService.remove(id);
  }
}
