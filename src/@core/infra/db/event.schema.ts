import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: "events" })
export class EventSchema {
  //typeorm
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  active: boolean;

  @Column('timestamptz')
  date: Date;
}
