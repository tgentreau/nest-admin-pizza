import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import { AppModule } from './app.module';
import * as session from 'express-session';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.useStaticAssets(join(__dirname, '..', 'public'));
  app.setBaseViewsDir(join(__dirname, '..', 'views'));
  app.setViewEngine('hbs');
  app.set('view options', { layout: 'layout' });
  app.use(
    session({
      name: 'session',
      secret: 'my-secret',
      resave: false,
      saveUninitialized: false,
      cookie : {
        maxAge: 6000000
      }
    })
  );
  await app.listen(3000);
}
bootstrap();
