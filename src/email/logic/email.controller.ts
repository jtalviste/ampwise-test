import { Body, Controller, Get, Post, Put } from '@nestjs/common';
import { SendEmailService } from './sendemail.service';
import { Email } from '../data/email';
import { ValidateEmailService } from '../data/validateemail.service';

@Controller()
export class EmailController {
  constructor(readonly sendEmailService: SendEmailService) {}

  @Put("sendmail")
  async sendEmail(@Body() email:Email) {
    return await this.sendEmailService.sendEmail(email); 
  }


}
