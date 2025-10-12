import { Controller, Post, Body, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginAuthDto } from './dto/login-auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  async login(@Body() loginAuthDto: LoginAuthDto) {
    const user = await this.authService.login(loginAuthDto);
    if (!user) {
      throw new UnauthorizedException('Credenciales incorrectas');
    }
    return user;
  }
}
