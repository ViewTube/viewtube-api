import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';

@Injectable()
export class RegisterService {
  constructor(private readonly userService: UserService) {}
}
