"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import AddInstallmentForm from "./components/add_installment";

interface Installment {
  id: number;
  downpayment: number;
  duration: string;
  productBought: string;
  buyerName: string;
  isPaid: boolean;
  remainingAmount: number;
  nextPaymentDate: string;
}

const Installments: React.FC = () => {
  const [installments, setInstallments] = useState<any[]>([]);

  useEffect(() => {
    const fetchInstallments = async () => {
      try {
        const response = await fetch("http://localhost:3000/installments");
        if (!response.ok) {
          throw new Error("Failed to fetch installments");
        }
        const data = await response.json();
        setInstallments(data);
      } catch (error) {
        console.error("Error fetching installments:", error);
      }
    };

    fetchInstallments();
  }, []);

  const handleAdd = async (newInstallment: Installment) => {
    // console.log(Installment.downpayment);
    try {
      const response = await axios.post(
        "http://localhost:3000/installments",
        newInstallment
      );
      if (response.status === 201) {
        setInstallments([...installments, response.data]); // Add new installment to the list
      } else {
        console.error("Failed to add installment. Status:", response.status);
      }
    } catch (error) {
      console.error("Error adding installment:", error);
    }
  };
  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-semibold mb-6">Installments </h2>
      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse border border-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-2 text-left text-xs font-semibold text-gray-600 uppercase border-b">
                Product Bought
              </th>
              <th className="px-4 py-2 text-left text-xs font-semibold text-gray-600 uppercase border-b">
                Buyer Name
              </th>
              <th className="px-4 py-2 text-left text-xs font-semibold text-gray-600 uppercase border-b">
                Downpayment
              </th>
              <th className="px-4 py-2 text-left text-xs font-semibold text-gray-600 uppercase border-b">
                Duration
              </th>
              <th className="px-4 py-2 text-left text-xs font-semibold text-gray-600 uppercase border-b">
                Completed
              </th>
              <th className="px-4 py-2 text-left text-xs font-semibold text-gray-600 uppercase border-b">
                Remaining Amount
              </th>
              <th className="px-4 py-2 text-left text-xs font-semibold text-gray-600 uppercase border-b">
                Next Payment Date
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {installments.map((installment) => (
              <tr key={installment.id}>
                <td className="px-4 py-2 whitespace-nowrap">
                  {installment.productBrought}
                </td>
                <td className="px-4 py-2 whitespace-nowrap">
                  {installment.buyerName}
                </td>
                <td className="px-4 py-2 whitespace-nowrap">
                  ${installment.downpayment}
                </td>
                <td className="px-4 py-2 whitespace-nowrap">
                  {installment.duration}
                </td>
                <td className="px-4 py-2 whitespace-nowrap">
                  <span
                    className={`inline-block px-2 py-1 rounded-full text-xs ${
                      installment.isPaid
                        ? "bg-green-500 text-white"
                        : "bg-red-500 text-white"
                    }`}
                  >
                    {installment.isPaid ? "Completed" : "Not Completed"}
                  </span>
                </td>
                <td className="px-4 py-2 whitespace-nowrap">
                  ${installment.remainingAmount}
                </td>
                <td className="px-4 py-2 whitespace-nowrap">
                  {new Date(installment.nextPaymentDate).toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <AddInstallmentForm onAdd={handleAdd}></AddInstallmentForm>
    </div>
  );
};

export default Installments;
