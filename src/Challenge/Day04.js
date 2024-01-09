import React, { useState, useEffect } from "react";

export default function Day04() {
  const [formData, setFormData] = useState({
    principal: 1000,
    rate: 7,
    time: 5,
  });

  const [totalAmount, setTotalAmount] = useState(0);
  const [simpleInterest, setSimpleInterest] = useState(0);

  useEffect(() => {
    const { principal, rate, time } = formData;
    const interest = (principal * rate * time) / 100;
    setSimpleInterest(interest.toFixed(2));
    setTotalAmount((parseFloat(principal) + interest).toFixed(2));
  }, [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: Number(value),
    }));
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-10 text-white bg-green-500">
      <h1 className="mb-8 text-3xl font-bold">Simple Interest Calculator</h1>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        <div className="mb-4">
          <label htmlFor="principal" className="block mb-2 text-sm font-medium">
            Principal Amount
          </label>
          <input
            id="principal"
            type="number"
            name="principal"
            value={formData.principal}
            defaultValue={formData.principal}
            onChange={handleChange}
            placeholder="Enter principal amount"
            className="w-full p-2 bg-gray-200 border-2 border-gray-300 rounded-full outline-none"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="rate" className="block mb-2 text-sm font-medium">
            Annual Interest Rate
          </label>
          <input
            id="rate"
            type="number"
            name="rate"
            value={formData.rate}
            defaultValue={formData.rate}
            onChange={handleChange}
            placeholder="Enter the annual interest rate"
            className="w-full p-2 bg-gray-200 border-2 border-gray-300 rounded-full outline-none"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="time" className="block mb-2 text-sm font-medium">
            Time (in years)
          </label>
          <input
            type="number"
            id="time"
            name="time"
            value={formData.time}
            defaultValue={formData.time}
            onChange={handleChange}
            placeholder="Enter time in years"
            className="w-full p-2 bg-gray-200 border-2 border-gray-300 rounded-full outline-none"
          />
        </div>
      </div>
      <div className="mt-6">
        <div id="simpleInterest" className="mb-2 text-lg font-bold">
          Simple Interest: {simpleInterest}
        </div>
        <div id="totalAmount" className="text-lg font-bold">
          Total Amount: {totalAmount}
        </div>
      </div>
    </div>
  );
}
