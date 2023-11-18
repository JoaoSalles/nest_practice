import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository, getDataSourceToken } from '@nestjs/typeorm';
import { Repository, DataSource } from 'typeorm';
import { EventDto } from './dto/event.dto';
import { Event } from '../@core/domain/evento/event'
import { EventSchema } from 'src/@core/infra/db/event.schema';
import { ProducerService } from 'src/kafka/producer.service';

@Injectable()
export class EventosService {
  constructor(
    private readonly producerService: ProducerService,
    @InjectRepository(EventSchema)
    private repo: Repository<EventSchema>,
    @Inject(getDataSourceToken())
    private dataSource: DataSource,
  ) {}

  async getEvents(): Promise<EventDto[]> {
    await this.producerService.produce({
      topic: 'eventos',
      messages: [{
        value: 'Hello world'
      }]
    });
    const events = await this.repo.find();
    return this.eventToEventDto(events);
  }

  createEvents(event: EventDto) {
    this.repo.insert(event);
  }

  eventToEventDto(events: Array<EventSchema>) {
    return events.map( event => {
      let eventDto = new EventDto();
      eventDto.name = event.name;
      eventDto.active = event.active;
      eventDto.date = event.date.toString();
      return eventDto;
    } )
  }
}
