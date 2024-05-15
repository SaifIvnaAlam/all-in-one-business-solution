import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm/dist/typeorm.module';
import { installment } from './entities/installment.entity';
import { InstallmentsController } from './installments.controller';
import { InstallmentsService } from './installments.service';

@Module({
  imports: [TypeOrmModule.forFeature([installment])],

  controllers: [InstallmentsController],
  providers: [InstallmentsService],
})
export class InstallmentsModule {}
