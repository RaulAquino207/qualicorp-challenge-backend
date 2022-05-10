import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AppService } from './app.service';

@ApiTags('Health')
@Controller('/health')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/status')
  getHello() : object {
    return { status: 'sucess' };
  }
}
