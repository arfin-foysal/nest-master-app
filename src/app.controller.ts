import { Controller, Get, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { User } from './modules/auth/decorators/user.decorator';
import { Public } from './modules/auth/decorators/public.decorator';
import { AuthGuard } from '@nestjs/passport';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }
  

  // @UseGuards(AuthGuard('jwt'))
  @Get()
  async getHello(): Promise<string> {
    return await this.appService.getHello();
  }
}
