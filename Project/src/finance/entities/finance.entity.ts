import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class finance {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'date' })
  date: Date;

  @Column()
  expences: number;
  @Column()
  revenue: number;
  @Column()
  total: number;
  @Column()
  description: string;
}
