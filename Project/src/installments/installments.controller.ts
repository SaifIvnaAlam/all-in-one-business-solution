import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateInstallmentDto } from './dto/create-installment.dto';
import { UpdateInstallmentDto } from './dto/update-installment.dto';
import { InstallmentsService } from './installments.service';

@Controller('installments')
export class InstallmentsController {
  constructor(private readonly installmentsService: InstallmentsService) {}

  @Post()
  create(@Body() createInstallmentDto: CreateInstallmentDto) {
    return this.installmentsService.create(createInstallmentDto);
  }

  @Get()
  findAll() {
    return this.installmentsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.installmentsService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateInstallmentDto: UpdateInstallmentDto,
  ) {
    return this.installmentsService.update(+id, updateInstallmentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.installmentsService.remove(+id);
  }
}
