import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { User } from './modules/auth/decorators/user.decorator';
import { Public } from './modules/auth/decorators/public.decorator';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Public()
  @Get()
  async getHello(): Promise<string> {
    return await this.appService.getHello();
  }
}
