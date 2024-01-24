import React, { useState } from "react";
import "./App.css";

import Day01 from "./Challenge/Day01";
import Day02 from "./Challenge/Day02";
import Day03 from "./Challenge/Day03";
import Day13 from "./Challenge/Day13";

import Day04 from "./Challenge/Day04";
import Day05 from "./Challenge/Day05";
import Day06 from "./Challenge/Day06";
import Day14 from "./Challenge/Day14";
import Day15 from "./Challenge/Day15";
import Day16 from "./Challenge/Day16";
import Day17 from "./Challenge/Day17";
import Day18 from "./Challenge/Day18";
import Day19 from "./Challenge/Day19";
import Day20 from "./Challenge/Day20";
import Day22 from "./Challenge/Day22";
import Day23 from "./Challenge/Day23";
import Day25 from "./Challenge/Day25";
import Day26 from "./Challenge/Day26";
import Day27 from "./Challenge/Day27";
import Day28 from "./Challenge/Day28";
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
      case 13:
        return <Day13 />;
      case 15:
        return <Day15 />;
      case 16:
        return <Day16 />;
      case 17:
        return <Day17 />;
      case 18:
        return <Day18 />;
      case 19:
        return <Day19 />;
      case 20:
        return <Day20 />;
      case 22:
        return <Day22 />;
      case 23:
        return <Day23 />;
      case 25:
        return <Day25 />;
      case 26:
        return <Day26 />;
      case 27:
        return <Day27 />;
      case 28:
        return <Day28 />;

      default:
        return null;
    }
  };

  const handleOutputClick = () => {
    setIsOutputClicked(true);
    setIsSolutionClicked(false); // Reset solution button state
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
        <a href="https://github.com/bhos1242/React-30-Days-Challenge-Codedamn/tree/main/src/Challenge">
          <button
            className={`mt-4 px-6 py-3 bg-yellow-500 text-white rounded-md hover:bg-yellow-700 focus:outline-none focus:ring focus:border-blue-300 ${
              isSolutionClicked ? "bg-green-500" : ""
            }`}
          >
            {isSolutionClicked
              ? "Solution Shown!"
              : `Show Day ${count} Solution`}
          </button>
        </a>
      </header>{" "}
      <div className="w-full mt-5 text-center border-2 rounded-md">
        {error && <p className="mt-2 text-red-500">{error}</p>}
        {renderSelectedDay()}
      </div>
    </div>
  );
}

export default App;
