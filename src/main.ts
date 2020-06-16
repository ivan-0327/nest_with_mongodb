import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as helmt from 'helmet';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(helmt());
  app.enableCors();
  await app.listen(3001);
}
bootstrap();
