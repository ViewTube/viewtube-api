import { Test, TestingModule } from '@nestjs/testing';
import { CaptchaController } from './captcha.controller';

describe('Captcha Controller', () => {
  let controller: CaptchaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CaptchaController],
    }).compile();

    controller = module.get<CaptchaController>(CaptchaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
