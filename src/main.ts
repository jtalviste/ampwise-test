import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { EmailController } from './email/logic/email.controller';
import { Email } from './email/data/email';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
