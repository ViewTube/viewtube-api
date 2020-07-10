import { Controller, Post, Body } from '@nestjs/common';
import { RegisterService } from './register.service';
import { RegistrationDto } from './dto/registration.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('User')
@Controller('register')
export class RegisterController {
  constructor(private registerService: RegisterService) { }

  @Post()
  async registerUser(@Body() user: RegistrationDto): Promise<any> {
    return this.registerService.registerUser(user);
  }
}
