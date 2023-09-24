import { Controller, Get, Post } from '@nestjs/common';
import { EventDto } from './dto/event.dto';
import { Event } from '../@core/domain/evento/event'
import { EventosService } from './eventos.service';

@Controller('eventos')
export class EventosController {
  constructor(private readonly eventosService: EventosService) {}

  @Get()
  getEvent(): Array<Event> {
    return this.eventosService.getEvents();
  }

  @Post()
  createEvent(event: EventDto): void {
    return this.eventosService.createEvents(event);
  }
}
