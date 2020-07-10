import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, ExtractJwt } from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: process.env.VIEWTUBE_JWT_SECRET,
      issuer: 'viewtube-api',
      audience: 'viewtube-web',
    });
  }

  async validate(payload: any) {
    return { username: payload.username };
  }
}
