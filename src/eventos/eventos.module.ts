import { Module } from '@nestjs/common';
import { EventosController } from './eventos.controller';
import { EventosService } from './eventos.service';

@Module({
  imports: [],
  controllers: [EventosController],
  providers: [EventosService],
})
export class EventosModule {}
