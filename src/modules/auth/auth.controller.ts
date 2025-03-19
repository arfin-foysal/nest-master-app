import {
  BadRequestException,
  Body,
  Controller,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';
import { RegisterRequestDto } from './dtos/register-request.dto';
import { Public } from './decorators/public.decorator';
import { Response } from 'src/common/utils/response';

@Public()
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(AuthGuard('local'))
  @Post('login')
  async login(@Request() req) {
    try {
      if (!req.user) {
        throw new BadRequestException(Response.error(null, 'Invalid credentials', 401));
      }

      return this.authService.login(req.user);
    } catch (error) {
      throw new BadRequestException(Response.error(null, error.message || 'Login error', 400));
    }
  }

  @Post('register')
  async register(@Body() registerBody: RegisterRequestDto) {
    try {
      return await this.authService.register(registerBody);
    } catch (error) {
      throw new BadRequestException(Response.error(null, error.message || 'Registration error', 400));
    }
  }
}
