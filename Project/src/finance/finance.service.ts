import { Injectable, NotFoundException } from '@nestjs/common';
// import { UpdateFinanceDto } from './dto/update-finance.dto';
import { revenue } from './entities/revenue.entity';

import { InjectRepository } from '@nestjs/typeorm/dist/common/typeorm.decorators';
import { Repository } from 'typeorm/repository/Repository';
import { finance } from './entities/finance.entity';

@Injectable()
export class FinanceService {
  constructor(
    @InjectRepository(revenue)
    private revenueRepository: Repository<revenue>,
    @InjectRepository(finance)
    private financeRepository: Repository<finance>,
  ) {}

  async createrevenue(revenueData: Partial<revenue> = {}): Promise<revenue> {
    revenueData.date = revenueData.date || new Date().toISOString();
    revenueData.revenue = revenueData.revenue || 122992;
    revenueData.description = revenueData.description || 'This is the cost';
    const newrevenue = this.revenueRepository.create(revenueData);
    return this.revenueRepository.save(newrevenue);
  }

  async createFinance(financeData: Partial<finance> = {}): Promise<finance> {
    financeData.date = financeData.date || new Date();
    financeData.expences = financeData.expences || 0;
    financeData.revenue = financeData.revenue || 0;
    financeData.total = financeData.total || 0;
    financeData.description = financeData.description || 'Default description';

    const newFinance = this.financeRepository.create(financeData);
    return this.financeRepository.save(newFinance);
  }

  async getFinances(): Promise<finance[]> {
    return this.financeRepository.find();
  }

  async getAllRevenues(): Promise<revenue[]> {
    return this.revenueRepository.find();
  }

  findAll() {
    return `This action returns all finance`;
  }
  async getRevenueById(id: number): Promise<revenue> {
    const revenue = await this.revenueRepository.findOne({ where: { id } });
    if (!revenue) {
      throw new NotFoundException(`Revenue with ID ${id} not found`);
    }
    return revenue;
  }
  async deteRevenueById(id: number): Promise<string> {
    const revenue = await this.revenueRepository.delete(id);
    if (!revenue) {
      throw new NotFoundException(`Revenue with ID ${id} not found`);
    }
    return `Revenue ${id} Deleted`;
  }

  findOne(id: number) {
    return `This action returns a #${id} finance`;
  }

  // update(id: number, updateFinanceDto: UpdateFinanceDto) {
  //   return `This action updates a #${id} finance`;
  // }

  remove(id: number) {
    return `This action removes a #${id} finance`;
  }
}
