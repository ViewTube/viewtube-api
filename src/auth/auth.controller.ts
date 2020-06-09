import { Controller, Post, Request, UseGuards, Get } from '@nestjs/common';
import { LocalAuthGuard } from './guards/local.guard';
import { AuthService } from './auth.service';
import { UserDto } from 'src/user/user.dto';
import { JwtAuthGuard } from './guards/jwt.guard';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req: UserDto) {
    return this.authService.login(req.username);
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}
