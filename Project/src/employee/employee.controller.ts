import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Req,
  Request,
  UseGuards,
  ValidationPipe,
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/guards/jwt.guard';
import { RoleGuard } from 'src/guards/role.guard';
import { SetSchemaGuard } from 'src/guards/schema.guard';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { EmployeeService } from './employee.service';

@ApiTags('employee')
@ApiBearerAuth('access-token')
@Controller('employee')
@UseGuards(JwtAuthGuard, new RoleGuard(['owner', 'hr']))
export class EmployeeController {
  constructor(private readonly employeeService: EmployeeService) {}

  @Post('/registration')
  @ApiOperation({ summary: 'Register a new employee' })
  @ApiResponse({
    status: 201,
    description: 'Employee registered successfully.',
  })
  @ApiResponse({ status: 400, description: 'Bad Request.' })
  async register(
    @Body(ValidationPipe) createEmployeeDto: CreateEmployeeDto,
    @Req() req: any,
  ): Promise<void> {
    const { company, packageId } = req.user;
    return this.employeeService.registerEmployee(
      createEmployeeDto,
      company,
      packageId,
    );
  }

  @Get()
  @ApiOperation({ summary: 'Find all employees' })
  @ApiResponse({ status: 200, description: 'Return all employees.' })
  @UseGuards(SetSchemaGuard)
  async findAll(@Request() req) {
    return this.employeeService.findAll();
  }

  @Delete('/remove/:id')
  @ApiOperation({ summary: 'Remove an employee' })
  @ApiResponse({ status: 200, description: 'Employee removed successfully.' })
  @ApiResponse({ status: 404, description: 'Employee not found.' })
  @UseGuards(SetSchemaGuard)
  remove(@Param('id') id: string, @Request() req) {
    const company = req.company;
    return this.employeeService.remove(+id, company);
  }
}
