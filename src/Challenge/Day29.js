import { useState } from "react";

function App() {
  const [celsius, setCelsius] = useState(0);
  const [fahrenheit, setFahrenheit] = useState((celsius * 9) / 5 + 32);

  const convertToFahrenheit = (e) => {
    const celsiusValue = e.target.value;
    setCelsius(celsiusValue);
    const Fahrenheit = (celsiusValue * 9) / 5 + 32;
    setFahrenheit(Number(Fahrenheit.toFixed(2)));
  };

  const convertToCelsius = (e) => {
    const fahrenheitValue = e.target.value;
    setFahrenheit(fahrenheitValue);
    const Celsius = (fahrenheitValue - 32) * (5 / 9);
    setCelsius(Number(Celsius.toFixed(2)));
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="mb-8 text-center">
        <h1 className="mb-2 text-4xl font-bold text-blue-700">
          Temperature Converter
        </h1>
        <p className="text-gray-500">Enter a value in Celsius or Fahrenheit</p>
      </div>

      <div className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4">
        <div className="w-full md:w-1/2">
          <label
            htmlFor="celsius"
            className="block text-sm font-medium text-gray-700"
          >
            Celsius
          </label>
          <input
            type="number"
            id="celsius"
            value={celsius}
            placeholder="Enter Celsius"
            onChange={convertToFahrenheit}
            className="block w-full p-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>

        <span className="my-4 text-xl font-bold md:my-0">to</span>

        <div className="w-full md:w-1/2">
          <label
            htmlFor="fahrenheit"
            className="block text-sm font-medium text-gray-700"
          >
            Fahrenheit
          </label>
          <input
            type="number"
            id="fahrenheit"
            value={fahrenheit}
            placeholder="Enter Fahrenheit"
            onChange={convertToCelsius}
            className="block w-full p-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
