import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { Public } from 'src/modules/auth/decorators/public.decorator';
import { AuthGuard } from '@nestjs/passport';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  // @UseGuards(AuthGuard('local'))
  @Public()
  @Get(':id')
  async findOneById(@Param('id') id): Promise<any> {
    return this.userService.findOneById(id);
  }
}
