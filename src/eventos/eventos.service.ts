import { Injectable } from '@nestjs/common';
import { EventDto } from './dto/event.dto';
import { Event } from '../@core/domain/evento/event'

@Injectable()
export class EventosService {
  getEvents(): Array<Event> {
    return [];
  }
  createEvents(event: Event) {
    
  }
}
