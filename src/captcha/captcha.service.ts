import { Injectable } from '@nestjs/common';
import captcha from 'trek-captcha';
import hat from 'hat';
import { InjectModel } from '@nestjs/mongoose';
import { Captcha } from './schemas/captcha.schema';
import { CaptchaDto } from './dto/captcha.dto';
import { Model } from 'mongoose';

@Injectable()
export class CaptchaService {
  constructor(
    @InjectModel(Captcha.name) private readonly captchaModel: Model<Captcha>
  ) { }

  async getCaptcha(): Promise<CaptchaDto> {
    const { token, buffer } = await captcha({ size: 6 });

    const clientToken = hat();

    const captchaImage = buffer.toString('base64');

    const createdCaptcha = new this.captchaModel({
      clientToken,
      solution: token,
    });
    createdCaptcha.save();

    const captchaResponse: CaptchaDto = {
      token: clientToken,
      captchaImage: `data:image/gif;base64,${captchaImage}`
    };

    return captchaResponse;
  }

  async validateCaptcha(token: string, solution: string) {
    const captcha = await this.captchaModel
      .findOne({ clientToken: token })
      .exec();
    console.log(captcha);
  }
}
