import { Injectable } from '@nestjs/common';
import { name, version, author, country } from '../package.json';

@Injectable()
export class AppService {
  getStatus(): object {
    return {
      name,
      version,
      country,
      author,
    };
  }
}
