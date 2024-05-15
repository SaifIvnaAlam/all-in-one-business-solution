"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InstallmentsModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_module_1 = require("@nestjs/typeorm/dist/typeorm.module");
const installment_entity_1 = require("./entities/installment.entity");
const installments_controller_1 = require("./installments.controller");
const installments_service_1 = require("./installments.service");
let InstallmentsModule = class InstallmentsModule {
};
exports.InstallmentsModule = InstallmentsModule;
exports.InstallmentsModule = InstallmentsModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_module_1.TypeOrmModule.forFeature([installment_entity_1.installment])],
        controllers: [installments_controller_1.InstallmentsController],
        providers: [installments_service_1.InstallmentsService],
    })
], InstallmentsModule);
//# sourceMappingURL=installments.module.js.map