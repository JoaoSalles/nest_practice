import { Module } from '@nestjs/common';
import { TypeOrmModule,getDataSourceToken } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { EventTypeOrmRepository } from 'src/@core/infra/db/event.repository-typeorm';
import { EventService } from '../@core/domain/evento/event.service';
import { EventRepository } from '../@core/domain/evento/event.repository';
import { EventSchema } from 'src//@core/infra/db/event.schema';
import { EventosController } from './eventos.controller';
import { EventosService } from './eventos.service';

@Module({
  imports: [TypeOrmModule.forFeature([EventSchema])],
  controllers: [EventosController],
  providers: [
    EventosService,
    {
      provide: EventTypeOrmRepository,
      useFactory: (dataSource: DataSource) => {
        return new EventTypeOrmRepository(
          dataSource.getRepository(EventSchema),
        );
      },
      inject: [getDataSourceToken()],
    },
    {
      provide: EventService,
      useFactory: (repo: EventRepository) => {
        return new EventService(repo);
      },
      inject: [EventTypeOrmRepository],
    },
  ],
})
export class EventosModule {}
