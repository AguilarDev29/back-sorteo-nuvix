import { Injectable, UnauthorizedException, Logger } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  private readonly logger = new Logger(AuthService.name);

  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(username: string, pass: string): Promise<any> {
    this.logger.debug(`Intentando validar usuario: ${username}`);
    const user = await this.userService.findOne(username);

    if (!user) {
      this.logger.warn(`Usuario no encontrado: ${username}`);
      return null;
    }

    this.logger.debug(`Usuario encontrado: ${user.username}. Comparando contraseñas...`);
    const isMatch = await bcrypt.compare(pass, user.password);

    if (isMatch) {
      this.logger.log(`Contraseña válida para el usuario: ${username}`);
      const { password, ...result } = user;
      return result;
    }

    this.logger.warn(`Contraseña inválida para el usuario: ${username}`);
    return null;
  }

  async login(user: any) {
    const userIsValid = await this.validateUser(user.username, user.password);
    if (!userIsValid) {
      throw new UnauthorizedException('Credenciales incorrectas');
    }
    const payload = { username: userIsValid.username, sub: userIsValid.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
