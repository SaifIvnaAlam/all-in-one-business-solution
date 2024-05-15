export class FinanceDTO {
  id: number;
  date: Date;
  expenses: number;
  revenue: number;
  total: number;
  description: string;

  constructor(
    id: number,
    date: Date,
    expenses: number,
    revenue: number,
    total: number,
    description: string,
  ) {
    this.id = id;
    this.date = date;
    this.expenses = expenses;
    this.revenue = revenue;
    this.total = total;
    this.description = description;
  }
}
