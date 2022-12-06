import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cookieParser from 'cookie-parser';

const port = 3301

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(cookieParser());
  app.enableCors({
    origin: ["http://localhost:3000"], //Aqui necessito de colocar os dominios que vão aceder a este servidor
    credentials: true,
    exposedHeaders: 'Set-Cookie'
  });
  await app.listen(port);
}

bootstrap();
