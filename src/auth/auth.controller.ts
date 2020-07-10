import { Controller, Post, UseGuards, Get, Body, Req } from '@nestjs/common';
import { LocalAuthGuard } from './guards/local.guard';
import { AuthService } from './auth.service';
import { UserDto } from 'src/user/user.dto';
import { JwtAuthGuard } from './guards/jwt.guard';
import { UserprofileDto } from './dto/userprofile.dto';
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';

@ApiTags('User')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) { }

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Body() user: UserDto) {
    return this.authService.login(user.username);
  }

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Req() req: any): UserprofileDto {
    return {
      username: req.user.username
    };
  }
}
