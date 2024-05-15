import { Repository } from 'typeorm/repository/Repository';
import { CreateInstallmentDto } from './dto/create-installment.dto';
import { UpdateInstallmentDto } from './dto/update-installment.dto';
import { installment } from './entities/installment.entity';
export declare class InstallmentsService {
    private readonly installmentRepository;
    constructor(installmentRepository: Repository<installment>);
    create(createInstallmentDto: CreateInstallmentDto): Promise<installment>;
    findAll(): Promise<installment[]>;
    findOne(id: number): Promise<installment>;
    update(id: number, updateInstallmentDto: UpdateInstallmentDto): Promise<installment>;
    remove(id: number): Promise<void>;
}
