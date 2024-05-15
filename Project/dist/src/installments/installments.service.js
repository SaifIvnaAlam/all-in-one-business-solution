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
exports.InstallmentsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_decorators_1 = require("@nestjs/typeorm/dist/common/typeorm.decorators");
const Repository_1 = require("typeorm/repository/Repository");
const installment_entity_1 = require("./entities/installment.entity");
let InstallmentsService = class InstallmentsService {
    constructor(installmentRepository) {
        this.installmentRepository = installmentRepository;
    }
    async create(createInstallmentDto) {
        const installment = this.installmentRepository.create(createInstallmentDto);
        return this.installmentRepository.save(installment);
    }
    findAll() {
        return this.installmentRepository.find();
    }
    async findOne(id) {
        const installment = await this.installmentRepository.findOne({
            where: { id },
        });
        if (!installment) {
            throw new common_1.NotFoundException(`Installment with ID ${id} not found`);
        }
        return installment;
    }
    async update(id, updateInstallmentDto) {
        const installment = await this.findOne(id);
        this.installmentRepository.merge(installment, updateInstallmentDto);
        return this.installmentRepository.save(installment);
    }
    async remove(id) {
        const installment = await this.findOne(id);
        await this.installmentRepository.remove(installment);
    }
};
exports.InstallmentsService = InstallmentsService;
exports.InstallmentsService = InstallmentsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_decorators_1.InjectRepository)(installment_entity_1.installment)),
    __metadata("design:paramtypes", [Repository_1.Repository])
], InstallmentsService);
//# sourceMappingURL=installments.service.js.map