import { Controller, Post, Request, UseGuards, Get, Body } from '@nestjs/common';
import { LocalAuthGuard } from './guards/local.guard';
import { AuthService } from './auth.service';
import { UserDto } from 'src/user/user.dto';
import { JwtAuthGuard } from './guards/jwt.guard';
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) { }

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Body() user: UserDto) {
    return this.authService.login(user.username);
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Body() req: any): { username: string } {
    return req.user;
  }
}
