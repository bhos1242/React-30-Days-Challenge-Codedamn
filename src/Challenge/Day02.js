import React, { useState } from "react";
import "tailwindcss/tailwind.css"; // Import the Tailwind CSS file

export default function Day02() {
  const [number, setNumber] = useState(0);

  return (
    <div className="container mx-auto my-8 text-center">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h1 data-testid="counter" className="text-4xl font-bold text-blue-700">
          {number}
        </h1>
        <button
          data-testid="incrementButton"
          className="mt-4 px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-700"
          onClick={() => {
            setNumber(number + 3);
          }}
        >
          Increment 3 times
        </button>
      </div>
    </div>
  );
}
