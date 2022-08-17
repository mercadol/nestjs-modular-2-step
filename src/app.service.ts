import { Injectable } from '@nestjs/common';

import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {
  constructor(
    private config: ConfigService,
  ) {};
  getHello(): string {
    const apikey= this.config.get<String>('API_KEY');
    const db= this.config.get('DATABASE_NAME');
    return `Hola: ${apikey}  ${db}`;
  }
}
