// src/auth/dtos/login-response.dto.ts
import { AccessToken } from '../types/AccessToken';

export class LoginResponseDTO {
  message: string;
  token: AccessToken; // Add this line
  user: any;
}