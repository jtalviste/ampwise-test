import { Injectable } from "@nestjs/common";
import { Email } from "./email";
import { validate } from "class-validator";

@Injectable()
export class ValidateEmailService {

    public async validateMessage(message:Email){
        return await validate(message);
    }

}
