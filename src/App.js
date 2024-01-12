import React, { useState } from "react";
import "./App.css";
import Day01 from "./Challenge/Day01";
import Day02 from "./Challenge/Day02";
import Day03 from "./Challenge/Day03";
import Day13 from "./Challenge/Day13";
import Day13Solution from "./Codes/Day13Solution";
import Day04 from "./Challenge/Day04";
import Day05 from "./Challenge/Day05";
import Day06 from "./Challenge/Day06";
import Day14 from "./Challenge/Day14";
import Day15 from "./Challenge/Day15";
import Day16 from "./Challenge/Day16";
function App() {
  const [count, setCount] = useState(0);
  const [isOutputClicked, setIsOutputClicked] = useState(false);
  const [isSolutionClicked, setIsSolutionClicked] = useState(false);
  const [error, setError] = useState(null);

  const renderSelectedDay = () => {
    switch (count) {
      case 1:
        return <Day01 />;
      case 2:
        return <Day02 />;
      case 3:
        return <Day03 />;
      case 4:
        return <Day04 />;
      case 5:
        return <Day05 />;
      case 6:
        return <Day06 />;
      case 14:
        return <Day14 />;
      case 15:
        return <Day15 />;
      case 16:
        return <Day16 />;
      case 13:
        return isSolutionClicked ? <Day13Solution /> : <Day13 />;
      default:
        return null;
    }
  };

  const handleOutputClick = () => {
    setIsOutputClicked(true);
    setIsSolutionClicked(false); // Reset solution button state
    setError(null);
  };

  const handleSolutionClick = () => {
    setIsSolutionClicked(true);
    setIsOutputClicked(false); // Reset output button state
    setError(null);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <header className="text-center">
        <h1 className="mb-4 text-4xl font-bold text-blue-700">
          React 30 Days Challenge - Codedamn
        </h1>
        <input
          type="number"
          placeholder="Enter Day number to see the output"
          onChange={(e) => setCount(parseInt(e.target.value))}
          className={`border p-2 rounded-md focus:outline-none focus:ring focus:border-blue-300 ${
            error ? "border-red-500" : ""
          }`}
        />

        <button
          className={`mt-4 px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-300 ${
            isOutputClicked ? "bg-green-500" : ""
          }`}
          onClick={handleOutputClick}
        >
          {isOutputClicked ? "Day Output Shown!" : `Show Day ${count} Output`}
        </button>

        <button
          className={`mt-4 px-6 py-3 bg-yellow-500 text-white rounded-md hover:bg-yellow-700 focus:outline-none focus:ring focus:border-blue-300 ${
            isSolutionClicked ? "bg-green-500" : ""
          }`}
          onClick={handleSolutionClick}
        >
          {isSolutionClicked ? "Solution Shown!" : `Show Day ${count} Solution`}
        </button>
      </header>{" "}
      <div className="w-full mt-5 text-center border-2 rounded-md">
        {error && <p className="mt-2 text-red-500">{error}</p>}
        {renderSelectedDay()}
      </div>
    </div>
  );
}

export default App;
