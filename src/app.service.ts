import { Injectable, NotFoundException } from '@nestjs/common';
import { UsersService } from './users/users.service';
import { User } from './users/entities/users.entity';
import { UUID } from 'crypto';
import { Public } from './auth/decorators/public.decorator';

@Injectable()
export class AppService {
  constructor(private readonly usersService: UsersService) {}


  async getHello(userId: UUID): Promise<string> {
    const user = await this.usersService.findOneById(userId);

    if (!user) {
      throw new NotFoundException(`User with ID ${userId} not found`);
    }

    return `Hello ${user.firstName}!`;
  }
}
