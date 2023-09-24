import { Event } from './event';
import { EventRepository } from './event.repository';

export class EventService { 
    constructor(private eventRepo: EventRepository) {}

    async create(name: string, date: Date) {
        const event = new Event(name, date);
        await this.eventRepo.insert(event); await this.eventRepo.insert(event);
        return event;
    }

    async update(id: string, name?: string, date?: Date) {
        const event = await this.eventRepo.findEventByID(id);

        if(!event) {
            return false;
        }

        const newEvent = new Event(name, date, id);

        try {
            await this.eventRepo.update(newEvent)
        } catch(e) {
            console.log("erro durante atualização!")
            return false;
        }

        return true;
    }

    async deleteEvent(id: string) {
        const event = await this.eventRepo.findEventByID(id);

        if(!event) {
            return false;
        }

        try {
            await this.eventRepo.deleteEvent(id);
        } catch(e) {
            console.log("erro durante atualização!")
            return false;
        }

        return true;
    }
}