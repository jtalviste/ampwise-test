import { Injectable } from '@nestjs/common';

@Injectable()
export class EnvService {

  constructor(){
    require('dotenv').config();
  }

  getSendGripApiKey(): string {
    return  process.env.SENDGRID_API_KEY;
  }

  getSender(): string {
    return  process.env.SENDER_MAIL;
  }

}
