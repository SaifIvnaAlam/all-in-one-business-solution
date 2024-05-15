"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FinanceService = void 0;
const common_1 = require("@nestjs/common");
const revenue_entity_1 = require("./entities/revenue.entity");
const typeorm_decorators_1 = require("@nestjs/typeorm/dist/common/typeorm.decorators");
const Repository_1 = require("typeorm/repository/Repository");
const finance_entity_1 = require("./entities/finance.entity");
let FinanceService = class FinanceService {
    constructor(revenueRepository, financeRepository) {
        this.revenueRepository = revenueRepository;
        this.financeRepository = financeRepository;
    }
    async createrevenue(revenueData = {}) {
        revenueData.date = revenueData.date || new Date().toISOString();
        revenueData.revenue = revenueData.revenue || 122992;
        revenueData.description = revenueData.description || 'This is the cost';
        const newrevenue = this.revenueRepository.create(revenueData);
        return this.revenueRepository.save(newrevenue);
    }
    async createFinance(financeData = {}) {
        financeData.date = financeData.date || new Date();
        financeData.expences = financeData.expences || 0;
        financeData.revenue = financeData.revenue || 0;
        financeData.total = financeData.total || 0;
        financeData.description = financeData.description || 'Default description';
        const newFinance = this.financeRepository.create(financeData);
        return this.financeRepository.save(newFinance);
    }
    async getFinances() {
        return this.financeRepository.find();
    }
    async getAllRevenues() {
        return this.revenueRepository.find();
    }
    findAll() {
        return `This action returns all finance`;
    }
    async getRevenueById(id) {
        const revenue = await this.revenueRepository.findOne({ where: { id } });
        if (!revenue) {
            throw new common_1.NotFoundException(`Revenue with ID ${id} not found`);
        }
        return revenue;
    }
    async deteRevenueById(id) {
        const revenue = await this.revenueRepository.delete(id);
        if (!revenue) {
            throw new common_1.NotFoundException(`Revenue with ID ${id} not found`);
        }
        return `Revenue ${id} Deleted`;
    }
    findOne(id) {
        return `This action returns a #${id} finance`;
    }
    remove(id) {
        return `This action removes a #${id} finance`;
    }
};
exports.FinanceService = FinanceService;
exports.FinanceService = FinanceService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_decorators_1.InjectRepository)(revenue_entity_1.revenue)),
    __param(1, (0, typeorm_decorators_1.InjectRepository)(finance_entity_1.finance)),
    __metadata("design:paramtypes", [Repository_1.Repository,
        Repository_1.Repository])
], FinanceService);
//# sourceMappingURL=finance.service.js.map