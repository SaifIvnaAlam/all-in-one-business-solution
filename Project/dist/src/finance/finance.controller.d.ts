import { FinanceDTO } from './dto/create-finance.dto';
import { CreateRevenueDto } from './dto/create-revenue.dto';
import { FinanceService } from './finance.service';
export declare class FinanceController {
    private readonly financeService;
    constructor(financeService: FinanceService);
    getTotalFinance(): Promise<import("./entities/finance.entity").finance[]>;
    createFinance(financeDto: FinanceDTO): Promise<import("./entities/finance.entity").finance>;
    create(createRevenueDto: CreateRevenueDto): Promise<import("./entities/revenue.entity").revenue>;
    findAll(): Promise<import("./entities/revenue.entity").revenue[]>;
    getRevenueByid(id: number): Promise<import("./entities/revenue.entity").revenue>;
    remove(id: number): Promise<string>;
}
