import { useState } from "react";

export default function Day18() {
  const [formData, setFormData] = useState({
    totalCost: "",
    numberOfIntervals: "",
  });

  const [output, setOutput] = useState("");

  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const calculateEmi = () => {
    const { totalCost, numberOfIntervals } = formData;

    if (
      !totalCost ||
      !numberOfIntervals ||
      isNaN(totalCost) ||
      isNaN(numberOfIntervals) ||
      totalCost <= 0 ||
      numberOfIntervals <= 0
    ) {
      // Handle invalid input
      setOutput("Please enter valid positive numeric values.");
      return;
    }

    const result = parseFloat(totalCost) / parseFloat(numberOfIntervals);
    setOutput(`Monthly EMI: ${result.toFixed(2)}`);
  };

  return (
    <>
      <div>
        <h1 id="heading" className="text-center font-bold text-3xl p-2">
          Loan Calculator
        </h1>
        <div className="text-center">
          <input
            type="number"
            id="totalCost"
            name="totalCost"
            value={formData.totalCost}
            onChange={handleInput}
            placeholder="Enter Total Loan Amount"
            className="outline-none bg-gray-200 rounded-full text-center text-gray-900 p-3"
          />
        </div>
        <div className="text-center my-2">
          <input
            type="number"
            id="numberOfIntervals"
            name="numberOfIntervals"
            value={formData.numberOfIntervals}
            onChange={handleInput}
            placeholder="Enter no. of monthly payments"
            className="outline-none bg-gray-200 rounded-full text-center text-gray-900 p-3"
          />
        </div>
        <div id="button" className="text-center my-3">
          <button
            id="calculate"
            className="font-bold bg-green-600 p-3 rounded-full hover:bg-green-700 text-white"
            onClick={calculateEmi}
          >
            Calculate
          </button>
        </div>

        <div id="output" className="text-center my-4 font-bold">
          {output}
        </div>
      </div>
    </>
  );
}
