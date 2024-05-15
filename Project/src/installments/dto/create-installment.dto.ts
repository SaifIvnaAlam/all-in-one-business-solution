export class CreateInstallmentDto {
  downpayment: number;
  duration: number;
  productBrought: string;
  buyerName: string;
  isPaid: boolean;
  remainingAmount: number;
  nextPaymentDate: Date;
  // Add other required fields here
}
