import { revenue } from './entities/revenue.entity';
import { Repository } from 'typeorm/repository/Repository';
import { finance } from './entities/finance.entity';
export declare class FinanceService {
    private revenueRepository;
    private financeRepository;
    constructor(revenueRepository: Repository<revenue>, financeRepository: Repository<finance>);
    createrevenue(revenueData?: Partial<revenue>): Promise<revenue>;
    createFinance(financeData?: Partial<finance>): Promise<finance>;
    getFinances(): Promise<finance[]>;
    getAllRevenues(): Promise<revenue[]>;
    findAll(): string;
    getRevenueById(id: number): Promise<revenue>;
    deteRevenueById(id: number): Promise<string>;
    findOne(id: number): string;
    remove(id: number): string;
}
