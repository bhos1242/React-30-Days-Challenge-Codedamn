import { useState } from "react";

export default function Day13() {
  const [billAmount, setBillAmount] = useState(0);
  const [tipPercentage, setTipPercentage] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);
  const [error, setError] = useState("");

  const calculateTotalAmount = () => {
    const parsedBillAmount = parseFloat(billAmount);
    const parsedTipPercentage = parseFloat(tipPercentage);

    if (
      isNaN(parsedBillAmount) ||
      isNaN(parsedTipPercentage) ||
      parsedTipPercentage < 1
    ) {
      setError(
        "Please enter valid numbers for Bill Amount and Tip Percentage."
      );
      setTotalAmount(0);
    } else {
      const tipAmount = (parsedBillAmount * parsedTipPercentage) / 100;
      const total = parsedBillAmount + tipAmount;
      setTotalAmount(total);
      setError("");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
        <input
          type="number"
          id="billAmount"
          placeholder="Enter Bill Amount Here"
          className="w-full p-4 my-3 bg-gray-200 border-2 border-gray-300 rounded-full outline-none"
          onChange={(e) => setBillAmount(e.target.value)}
        />
        <input
          type="number"
          id="tipPercent"
          placeholder="Enter the tip percentage"
          className="w-full p-4 my-3 bg-gray-200 border-2 border-gray-300 rounded-full outline-none"
          onChange={(e) => setTipPercentage(e.target.value)}
        />
        {error && <p className="text-red-500">{error}</p>}
        <button
          id="calculate"
          className="flex items-center justify-center w-full p-4 my-4 font-bold text-white bg-green-500 rounded-full hover:bg-green-700 focus:outline-none focus:ring focus:border-blue-300"
          onClick={calculateTotalAmount}
        >
          Calculate Tip
        </button>
        <div id="totalAmount" className="text-xl font-bold text-green-700">
          {totalAmount.toFixed(2)}
        </div>
      </div>
    </div>
  );
}
