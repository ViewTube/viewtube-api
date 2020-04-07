import { Injectable } from '@nestjs/common';
import { name, version, author, country } from '../package.json';

@Injectable()
export class AppService {
  getHello(): object {
    return {
      name,
      version,
      country,
      author,
    };
  }
}
