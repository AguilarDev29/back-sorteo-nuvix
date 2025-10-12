import { Controller, Get, UseGuards } from '@nestjs/common';
import { StartService } from './start.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('start')
@UseGuards(JwtAuthGuard)
export class StartController {
  constructor(private readonly startService: StartService) {}

  @Get()
  start() {
    return this.startService.start();
  }
}
