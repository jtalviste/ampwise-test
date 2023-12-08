import { Test, TestingModule } from '@nestjs/testing';


jest.mock('./sendemail.service')
import { SendEmailService } from './sendemail.service';

import { EmailController } from './email.controller';

jest.mock('./validateemail.service')
import { ValidateEmailService } from '../data/validateemail.service';

import { Email } from '../data/email';

describe('EmailController', () => {

  let emailController: EmailController;
  let sendEmailService: SendEmailService;
  let app: TestingModule;

  beforeEach(async () => {
    app = await Test.createTestingModule({
      controllers: [EmailController],
      providers: [SendEmailService,ValidateEmailService],
    }).compile();
    
    sendEmailService = app.get<SendEmailService>(SendEmailService);
    emailController = new EmailController(sendEmailService);
  });

  describe('sending message)', () => {
    it('sends message', async () => {
      const email = new Email("title","jtalviste@gmail.com","contents contents contents contents")
      emailController.sendEmail(email)
      
      expect(sendEmailService.sendEmail).toHaveBeenCalled();
    });
  });

})
