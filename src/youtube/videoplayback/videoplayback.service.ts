import { Injectable } from '@nestjs/common';
import ytdl from 'ytdl-core';
import fs from 'fs';
import path from 'path';
import ffmpeg from 'fluent-ffmpeg';
import { Readable } from 'stream';
import { Response } from 'express';

@Injectable()
export class VideoplaybackService {
  private combinedOutput: string = path.resolve('output/output.mp4');
  private video: Readable;

  private async streamVideo(audioOutput: string, url: string, res: Response) {
    this.video = ytdl(url, {
      filter: (format) => format.container === 'mp4' && !format.audioBitrate,
    }).on('info', (videoInfo, videoFormat: ytdl.videoFormat) => {
      // console.log('Video info:\n', videoInfo);
      console.log('Video format:\n', videoFormat);
      res.writeHead(200, {
        'Content-Type': 'video/mp4',
      });
      ffmpeg()
        .input(this.video)
        .videoCodec('copy')
        .input(audioOutput)
        .audioCodec('copy')
        .format('ismv')
        // .save(this.combinedOutput)
        // .concat(res, { end: true })
        .videoCodec('libx264')
        .on('progress', (chunkLength, downloaded, total) =>
          this.logProgress(chunkLength, downloaded, total, 'video'),
        )
        .on('end', () => {
          fs.unlink(audioOutput, (err) => {
            if (err) {
              console.log('unlink error:\n' + err);
            } else {
              console.log('done');
            }
          });
        })
        .on('error', (err: Error, stdout, stderr) => {
          console.log('ffmpeg error:\n' + err.message);
          console.log('ffmpeg stdout:\n' + stdout);
          console.log('ffmpeg stderr:\n' + stderr);
        })
        .pipe(res, { end: true });
    });
  }

  async getVideoStream(url: string, res: Response) {
    const audioOutput: string = path.resolve('output/sound-' + url + '.mp4');
    let streamStarted = false;
    const audioStream = ytdl(url, {
      filter: (format) => format.container === 'mp4' && !format.qualityLabel,
    })
      .on('error', console.error)
      .on('progress', (chunkLength, downloaded, total) => {
        this.logProgress(chunkLength, downloaded, total, 'audio');
        if (downloaded / total > 0.4 && streamStarted === false) {
          streamStarted = true;
          this.streamVideo(audioOutput, url, res);
        }
      })
      .pipe(fs.createWriteStream(audioOutput));
  }

  logProgress(chunkLength, downloaded, total, string) {
    console.log(chunkLength, downloaded, total, string);
    console.log(
      `${string}:${chunkLength}`,
      `${((downloaded / total) * 100).toFixed(2)}%`,
    );
  }
}
