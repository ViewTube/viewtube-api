import { Controller, Post } from '@nestjs/common';
import { RegisterService } from './register.service';
import { RegistrationDto } from './dto/registration.dto';

@Controller('register')
export class RegisterController {
  constructor(private registerService: RegisterService) { }

  @Post()
  async registerUser(user: RegistrationDto): Promise<any> {
    return this.registerService.registerUser(user);
  }
}
