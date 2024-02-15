import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import * as compression from 'compression';
import { join } from 'path';
import { AppModule } from './app.module';
import { useRequestLogging } from './utils/requestLogger';

async function bootstrap() {
  
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  const configService = app.get(ConfigService);
  app.useStaticAssets(join(__dirname, '..', 'uploads'));
  app.setBaseViewsDir(join(__dirname, '..', 'views'));
  useRequestLogging(app);
  //app.useGlobalPipes(new ValidationPipe());
  app.use(compression());
  app.enableCors();
  app.setViewEngine('hbs');
  if (configService.get('server.env') === 'development') {
    app.useStaticAssets(join(__dirname, '..', 'public'));
  }
  const port = configService.get('server.port');
  await app.listen(port);
}
bootstrap();
