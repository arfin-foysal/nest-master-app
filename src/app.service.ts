import { Injectable, NotFoundException } from '@nestjs/common';
import { UsersService } from './modules/users/users.service';
import { User } from './modules/users/entities/users.entity';
import { UUID } from 'crypto';
import { Public } from './modules/auth/decorators/public.decorator';

@Injectable()
export class AppService {
  constructor(private readonly usersService: UsersService) {}

  async getHello(): Promise<string> {
    return `Welcome to Nest App`;
  }
}
