import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';
import bcrypt from 'bcryptjs';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) { }

  async validateUser(username: string, pw: string) {
    const user = await this.userService.findOne(username);
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

  async login(username: string) {
    return {
      accessToken: this.jwtService.sign({ username }),
    };
  }
}
