import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class AppService {

  getHello(): string {
    return 'Hello World!';
  }

  

}
