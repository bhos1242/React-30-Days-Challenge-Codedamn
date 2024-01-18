import React, { useEffect, useState } from "react";

function Day22() {
  const [count, setCount] = useState(() => {
    const storedCount = JSON.parse(localStorage.getItem("count"));
    return storedCount !== null ? storedCount : 0;
  });

  useEffect(() => {
    localStorage.setItem("count", JSON.stringify(count));
  }, [count]);

  const resetCounter = () => {
    setCount(0);
    localStorage.setItem("count", JSON.stringify(count));
  };
  return (
    <div className="my-4 text-center">
      <h2 className="text-3xl text-gray-800" data-testid="count-id">
        Count: {count}
      </h2>
      <div className="mt-4">
        <button
          className="px-4 py-2 text-white bg-green-500 rounded cursor-pointer hover:bg-green-600"
          data-testid="inc-id"
          onClick={() => setCount(count + 1)}
        >
          +
        </button>
        <button
          className="px-4 py-2 ml-2 text-white bg-red-500 rounded cursor-pointer hover:bg-red-600"
          data-testid="dec-id"
          onClick={() => setCount(count - 1)}
        >
          -
        </button>
      </div>
      <div>
        <button
          className="p-3 m-4 font-bold text-white bg-red-500 rounded-full cursor-pointer hover:bg-red-600"
          onClick={resetCounter}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default Day22;
