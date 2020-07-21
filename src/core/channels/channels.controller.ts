import { Controller, Get, Param, Res, HttpException, NotFoundException } from '@nestjs/common';
import fs from 'fs';
import path from 'path';
import { Response } from 'express';

@Controller('channels')
export class ChannelsController {
  @Get('/:id/thumbnail/tiny.jpg')
  getTinyThumbnail(@Res() res: Response, @Param('id') id: string) {
    const imgPath = path.join(global['__basedir'], `channels/${id}.jpg`);

    if (fs.existsSync(imgPath)) {
      res.sendFile(imgPath);
    } else {
      throw new NotFoundException();
    }
  }
}
