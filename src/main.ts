import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { LoggingInterceptor } from './common/interceptor/loggin.interceptor';

async function start() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api/v1');
<<<<<<< HEAD
=======
  app.useGlobalInterceptors(new LoggingInterceptor)
>>>>>>> 6d16d89a57dda5867c39683052404ac0a88dabb5
  await app.listen(3000);
}

start();
