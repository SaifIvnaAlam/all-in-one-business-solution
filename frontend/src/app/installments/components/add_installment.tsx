"use client";
import React, { useState } from "react";

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

interface AddInstallmentFormProps {
  onAdd: (newInstallment: Installment) => void; // Function to handle addition of new installment
}

const AddInstallmentForm: React.FC<AddInstallmentFormProps> = ({ onAdd }) => {
  const [formData, setFormData] = useState({
    downpayment: "",
    duration: "",
    productBought: "",
    buyerName: "",
    isPaid: false,
    remainingAmount: "",
    nextPaymentDate: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      !formData.productBought ||
      !formData.buyerName ||
      !formData.duration ||
      !formData.nextPaymentDate
    )
      return;
    const newInstallment: Installment = {
      id: Date.now(),
      downpayment: parseFloat(formData.downpayment),
      duration: formData.duration,
      productBought: formData.productBought,
      buyerName: formData.buyerName,
      isPaid: formData.isPaid,
      remainingAmount: parseFloat(formData.remainingAmount),
      nextPaymentDate: formData.nextPaymentDate,
    };
    onAdd(newInstallment);
    setFormData({
      downpayment: "",
      duration: "",
      productBought: "",
      buyerName: "",
      isPaid: false,
      remainingAmount: "",
      nextPaymentDate: "",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="mb-8">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="productBought"
            className="block text-sm font-medium text-gray-700"
          >
            Product Bought
          </label>
          <input
            type="text"
            name="productBought"
            id="productBought"
            value={formData.productBought}
            onChange={handleChange}
            required
            className="mt-1 p-2 w-full border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div>
          <label
            htmlFor="buyerName"
            className="block text-sm font-medium text-gray-700"
          >
            Buyer Name
          </label>
          <input
            type="text"
            name="buyerName"
            id="buyerName"
            value={formData.buyerName}
            onChange={handleChange}
            required
            className="mt-1 p-2 w-full border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div>
          <label
            htmlFor="downpayment"
            className="block text-sm font-medium text-gray-700"
          >
            Downpayment
          </label>
          <input
            type="number"
            name="downpayment"
            id="downpayment"
            value={formData.downpayment}
            onChange={handleChange}
            required
            className="mt-1 p-2 w-full border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div>
          <label
            htmlFor="duration"
            className="block text-sm font-medium text-gray-700"
          >
            Duration
          </label>
          <input
            type="text"
            name="duration"
            id="duration"
            value={formData.duration}
            onChange={handleChange}
            required
            className="mt-1 p-2 w-full border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div>
          <label
            htmlFor="isPaid"
            className="block text-sm font-medium text-gray-700"
          >
            Is Paid
          </label>
          <select
            name="isPaid"
            id="isPaid"
            value={formData.isPaid ? "Yes" : "No"}
            onChange={handleChange}
            required
            className="mt-1 p-2 w-full border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="No">No</option>
            <option value="Yes">Yes</option>
          </select>
        </div>
        <div>
          <label
            htmlFor="remainingAmount"
            className="block text-sm font-medium text-gray-700"
          >
            Remaining Amount
          </label>
          <input
            type="number"
            name="remainingAmount"
            id="remainingAmount"
            value={formData.remainingAmount}
            onChange={handleChange}
            required
            className="mt-1 p-2 w-full border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div>
          <label
            htmlFor="nextPaymentDate"
            className="block text-sm font-medium text-gray-700"
          >
            Next Payment Date
          </label>
          <input
            type="date"
            name="nextPaymentDate"
            id="nextPaymentDate"
            value={formData.nextPaymentDate}
            onChange={handleChange}
            required
            className="mt-1 p-2 w-full border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div className="col-span-2 flex justify-end">
          <button
            type="submit"
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Add Installment
          </button>
        </div>
      </div>
    </form>
  );
};

export default AddInstallmentForm;
