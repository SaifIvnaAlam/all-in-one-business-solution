import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class installment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  downpayment: number;

  @Column()
  duration: number;

  @Column()
  productBrought: string;

  @Column()
  buyerName: string;

  @Column({ default: false })
  isPaid: boolean;

  @Column({ nullable: true })
  remainingAmount: number;

  @Column({ nullable: true })
  nextPaymentDate: Date;
}
