import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class revenue {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  date: string;

  @Column()
  revenue: number;
  @Column()
  description: string;
}
