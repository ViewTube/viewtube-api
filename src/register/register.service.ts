import { Injectable, HttpException } from '@nestjs/common';
import { RegistrationDto } from './dto/registration.dto';
import { CaptchaService } from 'src/captcha/captcha.service';
import { UserService } from 'src/user/user.service';
import { UserDto } from 'src/user/user.dto';
import bcrypt from "bcrypt";

@Injectable()
export class RegisterService {
  constructor(private captchaService: CaptchaService, private userService: UserService) { }

  async registerUser(user: RegistrationDto) {
    const captchaVerified: boolean = await this.captchaService
      .validateCaptcha(user.captchaToken, user.captchaSolution);
    if (captchaVerified) {
      this.captchaService.deleteCaptcha(user.captchaToken);

      const saltRounds = 10;
      let hash;
      try {
        hash = await bcrypt.hash(user.password, saltRounds);
      } catch (err) {
        console.error(err);
        throw new HttpException('Error registering user', 403);
      }
      const userToCreate: UserDto = {
        username: user.username,
        password: hash
      };
      return this.userService.create(userToCreate);
    }
  }
}
