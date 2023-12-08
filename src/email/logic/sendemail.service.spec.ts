import { Test } from '@nestjs/testing';

jest.mock('postmark')
import { SendEmailService } from './sendemail.service';

import { Email } from '../data/email';

jest.mock('./validateemail.service')
import { ValidateEmailService } from '../data/validateemail.service';

jest.mock('../env.service')
import { EnvService } from '../../env.service';

describe('SendEmailService', () => {

  let sendEmailService: SendEmailService;
  let mockValidateEmailService: ValidateEmailService;
  let envService = {
    getSendGripApiKey : ()=>""
  }

  let client

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [EnvService,ValidateEmailService,SendEmailService],
    }).compile();
  
    mockValidateEmailService = moduleRef.get<ValidateEmailService>(ValidateEmailService);
    sendEmailService = new SendEmailService(envService,mockValidateEmailService);
  });

  describe('sending email service)', () => {
    it('should try to send message', async () => {
      const email = new Email("title","jtalviste@gmail.com","contents contents contents contents")
      sendEmailService.sendEmail(email)
      expect(mockValidateEmailService.validateMessage).toHaveBeenCalledWith(email);
    });
  });

})
