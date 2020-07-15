import { Controller, Post, UseGuards, Body, Res } from '@nestjs/common';
import { LocalAuthGuard } from './guards/local.guard';
import { AuthService } from './auth.service';
import { UserDto } from 'src/user/user.dto';
import { ApiTags } from '@nestjs/swagger';
import { Response } from 'express';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) { }

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Res() response: Response, @Body() user: UserDto) {
    console.log('login')
    const cookie = await this.authService.getJwtCookie(user.username);
    response.setHeader('Set-Cookie', cookie);
    console.log('why u no workey', user, cookie);
    response.send(await this.authService.login(user.username))
    // return this.authService.login(user.username);
  }
}
