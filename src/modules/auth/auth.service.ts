import { BadRequestException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UsersService } from 'src/modules/users/users.service';
import { RegisterRequestDto } from './dtos/register-request.dto';
import { User } from 'src/modules/users/entities/users.entity';
import { Response } from 'src/common/utils/response';
@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string): Promise<User> {
    try {
      const user = await this.usersService.findOneByEmail(email);
      if (!user) {
        throw new BadRequestException(Response.error(null, 'User not found', 404));
      }

      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        throw new BadRequestException(Response.error(null, 'Invalid password', 400));
      }

      return user;
    } catch (error) {
      throw error instanceof BadRequestException
        ? error
        : new BadRequestException(Response.error(null, error.message || 'Something went wrong', 400));
    }
  }

  async login(user: User) {
    try {
      const payload = { email: user.email, id: user.id };
      const token = { access_token: this.jwtService.sign(payload,{
        expiresIn: process.env.JWT_EXPIRES_IN || '1d',
      }) };
      const { password, ...userWithoutPassword } = user;

      return Response.success({ user: userWithoutPassword, token }, 'Login successful');
    } catch (error) {
      throw new BadRequestException(Response.error(null, error.message || 'Login failed', 400));
    }
  }

  async register(userDto: RegisterRequestDto) {
    try {
      const existingUser = await this.usersService.findOneByEmail(userDto.email);
      if (existingUser) {
        throw new BadRequestException(Response.error(null, 'Email already exists', 400));
      }

      const hashedPassword = await bcrypt.hash(userDto.password, 10);
      const newUser = await this.usersService.create({
        ...userDto,
        password: hashedPassword,
        phone: userDto.phone || '',
        posts: [],
        createdAt: new Date(),
        updatedAt: new Date(),
      });

      return this.login(newUser);
    } catch (error) {
      throw new BadRequestException(Response.error(null, error.message || 'Registration failed', 400));
    }
  }
}
