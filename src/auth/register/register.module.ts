import { Module } from '@nestjs/common';
import { RegisterService } from './register.service';
import { RegisterController } from './register.controller';
import { CaptchaModule } from 'src/auth/captcha/captcha.module';
import { UserModule } from 'src/user/user.module';

@Module({
  providers: [RegisterService],
  controllers: [RegisterController],
  imports: [CaptchaModule, UserModule]
})
export class RegisterModule { }
