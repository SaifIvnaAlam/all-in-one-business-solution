import { CreateInstallmentDto } from './dto/create-installment.dto';
import { UpdateInstallmentDto } from './dto/update-installment.dto';
import { InstallmentsService } from './installments.service';
export declare class InstallmentsController {
    private readonly installmentsService;
    constructor(installmentsService: InstallmentsService);
    create(createInstallmentDto: CreateInstallmentDto): Promise<import("./entities/installment.entity").installment>;
    findAll(): Promise<import("./entities/installment.entity").installment[]>;
    findOne(id: string): Promise<import("./entities/installment.entity").installment>;
    update(id: string, updateInstallmentDto: UpdateInstallmentDto): Promise<import("./entities/installment.entity").installment>;
    remove(id: string): Promise<void>;
}
