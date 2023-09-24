import { Event } from './event';

export interface EventRepository {
    insert(event: Event): Promise<void>;
    update(event: Event): Promise<void>;
    findEventByID(id: string): Promise<Event>;
    getAll(): Promise<Event[]>;
    deleteEvent(id: string): Promise<boolean>;
}