import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function start() {
  const app = await NestFactory.create(AppModule);
  //app.setGlobalPrefix('api/v1');
  await app.listen(3000);
}

start();
