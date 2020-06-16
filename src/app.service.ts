import { Injectable } from '@nestjs/common';
import {INestApplication} from '@nestjs/common/interfaces/nest-application.interface';
@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
