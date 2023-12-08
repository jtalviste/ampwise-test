import { Module } from '@nestjs/common';
import { ValidateEmailService } from './email/data/validateemail.service';
import { SendEmailService } from './email/logic/sendemail.service';
import { EmailController } from './email/logic/email.controller';
import { EnvService } from './env.service';

@Module({
  imports: [],
  controllers: [EmailController],
  providers: [ValidateEmailService,SendEmailService,EnvService],
})
export class AppModule {}
