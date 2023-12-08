import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';
import { Email } from 'src/email/data/email';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();
    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('sends mail', () => {
    const email: Email = {
      title: 'This is a title',
      emailAddress: 'jtalviste@gmail.com',
      content: 'content content content content content'
    };
    return request(app.getHttpServer())
      .put('sendemail') // specify the route here
      .send(email)
      .expect(200);
  });
});
