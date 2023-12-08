import { Injectable } from '@nestjs/common';
import { ServerClient } from 'postmark';
import { EnvService } from '../../env.service';
import { ValidateEmailService } from '../data/validateemail.service';
import { Email } from '../data/email';
import { error } from 'console';

@Injectable()
export class SendEmailService {
  
  private client: ServerClient;

  constructor(private envService: EnvService, private validator: ValidateEmailService){
    this.client = new ServerClient(this.envService.getSendGripApiKey())
  }

  async sendEmail(message:Email) {
    console.log("sending email", message)
    const errors = await this.validator.validateMessage(message);
    console.log("validation errors:"+errors);
    if(errors && errors.length > 0){
      throw new Error("have validation errors: "+JSON.stringify(errors))
    }
    const fromMail = this.envService.getSender()
    await this.client.sendEmail({
      "From": fromMail,
      "To": message.emailAddress,
      "Subject": message.title,
      "TextBody": message.content
    });
  }
}
