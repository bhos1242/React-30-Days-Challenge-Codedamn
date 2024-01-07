import React from "react";
import { useState } from "react";
const Day01 = () => {
  const [visibility, setVisibility] = useState(true);
  const changeVisibility = () => {
    if (visibility) {
      setVisibility(false);
    } else {
      setVisibility(true);
    }
  };
  return (
    <div className="container mx-auto my-8 text-center">
      <div className="bg-gray-200 p-8 rounded-lg shadow-md">
        {visibility && (
          <p id="my-paragraph" className="text-lg text-blue-700">
            This is the paragraph you can toggle.
          </p>
        )}

        <button
          id="toggle-btn"
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
          onClick={changeVisibility}
        >
          Toggle Paragraph
        </button>
      </div>
    </div>
  );
};

export default Day01;
