import { Test, TestingModule } from '@nestjs/testing';
import { Email } from './email';
import { ValidateEmailService } from './validateemail.service';

describe('ValidateEmailService', () => {
  let validateEmailService: ValidateEmailService;

  beforeEach(async () => {
    validateEmailService = new ValidateEmailService();
  });

  it('message should be valid', async () => {
      const validMessage = new Email("Testing message","jtalviste@gmail.com","123456789012345678901234567890");
      const errors = await validateEmailService.validateMessage(validMessage);
      expect(errors).toHaveLength(0);
  });

  it('shouldn\'t send to invalid address', async () => {
      const validMessage = new Email("Testing message","null","123456789012345678901234567890");
      const errors = await validateEmailService.validateMessage(validMessage);
      expect(errors).toHaveLength(1);
  });

  it('shouldn\'t send with too long title', async () => {
      const validMessage = new Email("123456789012345678901234567890","jtalviste@gmail.com","123456789012345678901234567890");
      const errors = await validateEmailService.validateMessage(validMessage);
      expect(errors).toHaveLength(1);
  });

})
