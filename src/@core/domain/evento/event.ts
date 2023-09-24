import { v4 as uuid } from 'uuid';

export class Event {
    id: string;
    name: string;
    date: Date;
    active: boolean;

    constructor(name: string, date: Date, id?: string) {
        this.id = id ?? uuid();
        this.name = name;
        this.date = date;
        this.active = true;
    }

    desativeEvent() {
        this.active = false;
    }
}