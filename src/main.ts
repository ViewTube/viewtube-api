import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { ConfigService } from '@nestjs/config';
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { RedocOptions, RedocModule } from "nestjs-redoc";
import packageJson from "../package.json";

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  const configService = app.get(ConfigService);
  const port = configService.get('PORT');

  const documentOptions = new DocumentBuilder()
  .setTitle('ViewTube-API')
  .setDescription(packageJson.description)
  .setVersion(packageJson.version)
  .setLicense(packageJson.license, 'https://raw.githubusercontent.com/mauriceoegerli/viewtube-api/master/LICENSE')
  .build();

  const swaggerDocument = SwaggerModule.createDocument(app, documentOptions);

  const redocOptions: RedocOptions = {
    logo: {
      url: 'https://raw.githubusercontent.com/mauriceoegerli/viewtube-api/master/icon.svg',
      altText: 'ViewTube-API Logo'
    },
  };

  await RedocModule.setup('/', app, swaggerDocument, redocOptions);

  app.enableCors();
  await app.listen(port);
}
bootstrap();
