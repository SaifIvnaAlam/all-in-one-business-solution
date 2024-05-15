import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ApiBody } from '@nestjs/swagger';
import { ApiOperation } from '@nestjs/swagger/dist/decorators/api-operation.decorator';
import { ApiResponse } from '@nestjs/swagger/dist/decorators/api-response.decorator';
import { FinanceDTO } from './dto/create-finance.dto';
import { CreateRevenueDto } from './dto/create-revenue.dto';
import { FinanceService } from './finance.service';

@Controller('finance')
// @UseGuards(JwtAuthGuard, new RoleGuard(['owner']))
export class FinanceController {
  constructor(private readonly financeService: FinanceService) {}

  @Get()
  @ApiOperation({ summary: 'Get All Revenue' })
  @ApiResponse({ status: 400, description: 'Bad Request' })
  @ApiBody({ type: FinanceDTO })
  getTotalFinance() {
    return this.financeService.getFinances();
  }
  @Post()
  @ApiOperation({ summary: 'Create Finance Chart' })
  @ApiResponse({ status: 201, description: 'finance added' })
  @ApiResponse({ status: 400, description: 'Bad Request.' })
  @ApiBody({ type: FinanceDTO })
  async createFinance(@Body() financeDto: FinanceDTO) {
    console.log(financeDto);
    return this.financeService.createFinance(financeDto);
  }

  //asasd
  @Post('revenue')
  @ApiOperation({ summary: 'Create New Revenue chart' })
  @ApiResponse({ status: 201, description: 'Revenue has been Added' })
  @ApiResponse({ status: 400, description: 'Bad Request.' })
  @ApiBody({ type: CreateRevenueDto })
  async create(@Body() createRevenueDto: CreateRevenueDto) {
    console.log(createRevenueDto);
    return this.financeService.createrevenue(createRevenueDto);
  }
  @Get('revenue')
  @ApiOperation({ summary: 'Get All Revenue' })
  @ApiResponse({ status: 400, description: 'Bad Request' })
  @ApiBody({ type: CreateRevenueDto })
  findAll() {
    return this.financeService.getAllRevenues();
  }

  @Get('revenue/:id')
  @ApiOperation({ summary: 'Find Revenue By Id' })
  @ApiResponse({ status: 400, description: 'Bad Request.' })
  @ApiBody({ type: CreateRevenueDto })
  getRevenueByid(@Param('id') id: number) {
    return this.financeService.getRevenueById(id);
  }

  @Delete('revenue/:id')
  @ApiOperation({ summary: 'Delete Revenue By ID' })
  @ApiResponse({ status: 400, description: 'Bad Request.' })
  @ApiBody({ type: CreateRevenueDto })
  remove(@Param('id') id: number) {
    return this.financeService.deteRevenueById(id);
  }
}
