import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm/dist/typeorm.module';
import { finance } from './entities/finance.entity';
import { revenue } from './entities/revenue.entity';
import { FinanceController } from './finance.controller';
import { FinanceService } from './finance.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([revenue]), // Importing TypeOrmModule with the Revenue entity
    TypeOrmModule.forFeature([finance]), // Importing TypeOrmModule with the Revenue entity
    // Other imports...
  ],
  controllers: [FinanceController],
  providers: [FinanceService],
})
export class FinanceModule {}
