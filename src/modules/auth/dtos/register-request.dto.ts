import { IsString, IsEmail, IsOptional, IsPhoneNumber, Length } from 'class-validator';

export class RegisterRequestDto {
  @IsString()
  @Length(3, 100)  // Optional validation for name length
  name: string;

  @IsOptional()
  @IsString()
  phone?: string;

  @IsEmail()  // Ensures the email is a valid email address
  email: string;

  @IsString()
  @Length(6, 20)  // Validates the password to be between 6 to 20 characters
  password: string;
}
