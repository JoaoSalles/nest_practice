import { Repository } from 'typeorm';
import { EventSchema } from './event.schema';
import { Event } from '../../domain/evento/event';
import { EventRepository } from '../../domain/evento/event.repository';

export class EventTypeOrmRepository implements EventRepository {
  constructor(private ormRepo: Repository<EventSchema>) {}

  async insert(event: Event): Promise<void> {
    const model = this.ormRepo.create(event);
    await this.ormRepo.insert(model);
  }

  async update(event: Event): Promise<void> {
    await this.ormRepo.update(event.id, {
      name: event.name,
      active: event.active,
      date: event.date,
    });
  }

  async findEventByID(id: string): Promise<Event> {
    const queryBuilder = this.ormRepo.createQueryBuilder("events");

    queryBuilder.where("events.id = :id", { id });

    const model = await queryBuilder.getOne();

    return new Event(model.name, model.date);
  }

  async getAll(): Promise<Event[]> {
    const queryBuilder = this.ormRepo.createQueryBuilder("events");

    const models = await queryBuilder.getMany();

    return models.map( model => {
      return new Event(model.name, model.date);
    })
  }

  async deleteEvent(id: string): Promise<boolean> {
    await this.ormRepo.update(id, {
      active: false,
    });

    return true;
  }
}
