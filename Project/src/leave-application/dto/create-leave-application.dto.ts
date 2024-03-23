import { IsDateString, IsEnum, IsNotEmpty, IsString } from 'class-validator';
export enum LeaveStatus{
    Pending="pending",
    Approved="approved"
}

export class CreateLeaveApplicationDto {
  @IsNotEmpty()
  @IsDateString()
  startDate: string;

  @IsNotEmpty()
  @IsDateString()
  endDate: string;

  @IsNotEmpty()
  @IsString()
  description:string;

  
}
