import { Controller, Get } from '@nestjs/common';
import { CaptchaService } from './captcha.service';
import { CaptchaDto } from './dto/captcha.dto';

@Controller('captcha')
export class CaptchaController {
  constructor(private captchaService: CaptchaService) {}

  @Get()
  async getCaptcha(): Promise<CaptchaDto> {
    return this.captchaService.getCaptcha();
  }
}
