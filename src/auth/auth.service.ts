import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';
import bcrypt from 'bcryptjs';
import { ConfigService } from '@nestjs/config';
import cookieParser from 'cookie-parser';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
    private configService: ConfigService
  ) { }

  async validateUser(username: string, pw: string) {
    const user = await this.userService.findOne(username);
    console.log(user);
    if (user) {
      try {
        const comparison = await bcrypt.compare(pw, user.password);
        if (comparison === true) {
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          const { password, ...result } = user;
          return result;
        }
      } catch (err) {
        console.error(err);
      }
    }
    return null;
  }

  async getJwtCookie(username: string) {
    const { accessToken } = await this.login(username);
    const expiration = this.configService.get('VIEWTUBE_JWT_EXPIRATION_TIME');
    const domain = this.configService.get('VIEWTUBE_CURRENT_DOMAIN');
    return `Authentication=${accessToken}; HttpOnly=true; Secure=true; Domain=${domain} Max-Age=${expiration}`;
  }

  async login(username: string) {
    return {
      accessToken: this.jwtService.sign({ username }),
    };
  }
}
