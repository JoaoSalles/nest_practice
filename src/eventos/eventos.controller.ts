import { Controller, Get, Post, Body } from '@nestjs/common';
import { EventDto } from './dto/event.dto';
import { Event } from '../@core/domain/evento/event'
import { EventosService } from './eventos.service';

@Controller('eventos')
export class EventosController {
  constructor(
    private eventosService: EventosService,
  ) {}

  @Get()
  getEvent(): Promise<Array<EventDto>> {
    return this.eventosService.getEvents();
  }

  @Post()
  createEvent(@Body() event: EventDto): void {
    return this.eventosService.createEvents(event);
  }
}
