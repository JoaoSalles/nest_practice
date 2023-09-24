import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { nestConfig } from '../typeOrm.config.js';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EventosModule } from './eventos/eventos.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot(nestConfig),
    EventosModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
