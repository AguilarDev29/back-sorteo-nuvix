import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: process.env.JWT_SECRET || 'SUPER_SECRET_KEY', // Asegúrate de que coincida con el secreto en AuthModule
    });
  }

  async validate(payload: any) {
    // El payload es el objeto que codificamos en el token al hacer login
    return { userId: payload.sub, username: payload.username };
  }
}
