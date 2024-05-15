import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm/dist/common/typeorm.decorators';
import { Repository } from 'typeorm/repository/Repository';
import { CreateInstallmentDto } from './dto/create-installment.dto';
import { UpdateInstallmentDto } from './dto/update-installment.dto';
import { installment } from './entities/installment.entity';

@Injectable()
export class InstallmentsService {
  constructor(
    @InjectRepository(installment)
    private readonly installmentRepository: Repository<installment>,
  ) {}

  async create(
    createInstallmentDto: CreateInstallmentDto,
  ): Promise<installment> {
    const installment = this.installmentRepository.create(createInstallmentDto);
    return this.installmentRepository.save(installment);
  }

  findAll(): Promise<installment[]> {
    return this.installmentRepository.find();
  }

  async findOne(id: number): Promise<installment> {
    const installment = await this.installmentRepository.findOne({
      where: { id },
    });
    if (!installment) {
      throw new NotFoundException(`Installment with ID ${id} not found`);
    }
    return installment;
  }

  async update(
    id: number,
    updateInstallmentDto: UpdateInstallmentDto,
  ): Promise<installment> {
    const installment = await this.findOne(id);
    this.installmentRepository.merge(installment, updateInstallmentDto);
    return this.installmentRepository.save(installment);
  }

  async remove(id: number): Promise<void> {
    const installment = await this.findOne(id);
    await this.installmentRepository.remove(installment);
  }
}
