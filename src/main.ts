import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { ConfigService } from '@nestjs/config';
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import packageJson from "../package.json";
import cookieParser from "cookie-parser";
import webPush from 'web-push';
import fs from 'fs';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  const configService = app.get(ConfigService);
  const port = configService.get('PORT');
  const corsDomains = configService.get('VIEWTUBE_ALLOWED_DOMAINS').trim().split(',');
  if (configService.get('NODE_ENV') !== 'production') {
    corsDomains.push('http://localhost:8066');
  }

  webPush.setVapidDetails(
    `mailto:${packageJson.email}`,
    configService.get('VIEWTUBE_PUBLIC_VAPID'),
    configService.get('VIEWTUBE_PRIVATE_VAPID')
  );

  app.enableCors({
    origin: corsDomains,
    credentials: true
  });

  global['__basedir'] = __dirname;
  if (configService.get('VIEWTUBE_DATA_DIRECTORY')) {
    global['__basedir'] = configService.get('VIEWTUBE_DATA_DIRECTORY');
  }
  if (!fs.existsSync(global['__basedir'] + '/channels')) {
    fs.mkdirSync(global['__basedir'] + '/channels');
  }

  const documentOptions = new DocumentBuilder()
    .setTitle('ViewTube-API')
    .setDescription(packageJson.description)
    .setVersion(packageJson.version)
    .setLicense(packageJson.license, 'https://raw.githubusercontent.com/mauriceoegerli/viewtube-api/master/LICENSE')
    .addBearerAuth()
    .build();

  const swaggerDocument = SwaggerModule.createDocument(app, documentOptions);
  SwaggerModule.setup('/docs', app, swaggerDocument);

  app.use(cookieParser());

  await app.listen(port);
}
bootstrap();
