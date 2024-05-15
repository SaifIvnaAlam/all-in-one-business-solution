import React from "react";

interface FinanceProps {}

const Finance: React.FC<FinanceProps> = () => {
  // Dummy data for revenue and expenses
  const revenue: number = 5000;
  const expenses: number = 2000;
  const totalEarned: number = revenue - expenses;

  // Function to get current date
  const getCurrentDate = (): string => {
    const currentDate: Date = new Date();
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return currentDate.toLocaleDateString("en-US", options);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="px-6 py-4">
          <h1 className="text-3xl font-semibold text-gray-800 mb-2">
            Finance Overview
          </h1>
          <p className="text-gray-600 mb-6">Date: {getCurrentDate()}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-green-100 border border-green-200 p-6 rounded-lg">
              <h2 className="text-xl font-semibold text-green-700 mb-2">
                Revenue
              </h2>
              <p className="text-2xl font-bold text-green-800">${revenue}</p>
            </div>
            <div className="bg-red-100 border border-red-200 p-6 rounded-lg">
              <h2 className="text-xl font-semibold text-red-700 mb-2">
                Expenses
              </h2>
              <p className="text-2xl font-bold text-red-800">${expenses}</p>
            </div>
          </div>
          <div className="mt-6 bg-blue-100 border border-blue-200 p-6 rounded-lg">
            <h2 className="text-xl font-semibold text-blue-700 mb-2">
              Total Earned
            </h2>
            <p className="text-2xl font-bold text-blue-800">${totalEarned}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Finance;
