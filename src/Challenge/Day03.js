"use client";
import { useState } from "react";
export default function Day03() {
  const [formData, setFormData] = useState({
    number1: "",
    number2: "",
  });
  const [randomNumber, setRandomNumber] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value.trim(),
    }));
  };

  const generateRandom = () => {
    const { number1, number2 } = formData;

    if (isNaN(parseInt(number1)) || isNaN(parseInt(number2))) {
      setRandomNumber("Invalid Input");
    } else {
      const randomNum =
        Math.floor(
          Math.random() * (parseInt(number2) - parseInt(number1) + 1)
        ) + parseInt(number1);
      setRandomNumber(randomNum.toString());
    }
  };

  return (
    <div className="container mx-auto my-8 text-center">
      <h1 className="text-4xl font-bold mb-4 text-blue-700">
        Random Number Generator
      </h1>

      <div className="flex justify-center space-x-4">
        <input
          id="startRange"
          name="number1"
          type="number"
          placeholder="Enter min value"
          onChange={handleChange}
          value={formData.number1}
          className="border text-black p-2 rounded-md focus:outline-none focus:ring focus:border-blue-300"
        />
        <input
          id="endRange"
          name="number2"
          type="number"
          placeholder="Enter max value"
          onChange={handleChange}
          value={formData.number2}
          className="border p-2 rounded-md text-black focus:outline-none focus:ring focus:border-blue-300"
        />
      </div>

      <div id="randomNumber" className="text-2xl font-bold mt-4 text-blue-700">
        {randomNumber}
      </div>

      <button
        id="generate"
        onClick={generateRandom}
        className="mt-4 px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-300"
      >
        Generate
      </button>
    </div>
  );
}
