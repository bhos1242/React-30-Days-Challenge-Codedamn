import React, { useState } from "react";
import "./App.css";
import Day01 from "./Challenge/Day01";
import Day02 from "./Challenge/Day02";
import Day03 from "./Challenge/Day03";
import Day13 from "./Challenge/Day13";
function App() {
  const days = [Day01, Day02, Day03];
  const [count, setCount] = useState(0);
  const [isClicked, setIsClicked] = useState(false);
  const [error, setError] = useState(null);

  const renderSelectedDay = () => {
    switch (count) {
      case 1:
        return <Day01 />;
      case 2:
        return <Day02 />;
      case 3:
        return <Day03 />;
      case 13:
        return <Day13 />;
      default:
        return null;
    }
  };

  const handleClick = () => {
    if (count >= 1 && count <= days.length) {
      setIsClicked(true);
      setError(null);
    } else {
      setError("Please enter a valid day number.");
    }
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
            isClicked ? "bg-green-500" : ""
          }`}
          onClick={handleClick}
        >
          {isClicked ? "Day Shown!" : `Show Day ${count}`}
        </button>
        {error && <p className="mt-2 text-red-500">{error}</p>}
        {isClicked && renderSelectedDay()}
      </header>
    </div>
  );
}

export default App;
