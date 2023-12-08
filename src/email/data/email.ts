import {
    Length,
    IsEmail,
    MinLength,
    MaxLength,
  } from 'class-validator';
  
  export class Email {

    constructor(title:string,emailAddress:string,content:string){
      this.title = title
      this.emailAddress = emailAddress
      this.content = content
    }

    @MinLength(4, {
      message: 'Title is too short',
    })
    @MaxLength(40, {
      message: 'Title is too long',
    })
    title: string;
  
    @IsEmail({},{
      message: 'Invalid email',
    })
    emailAddress: string;

    @MinLength(10, {
      message: 'Message is too short',
    })
    @MaxLength(3000, {
      message: 'Message is too long',
    })
    content:string;
  }