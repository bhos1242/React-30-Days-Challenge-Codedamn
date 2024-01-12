import React, { useState } from "react";

const Day15 = () => {
  const [currentPalette, setCurrentPalette] = useState([]);
  const [savedPalettes, setSavedPalettes] = useState([]);

  const generateRandomColor = () =>
    `#${Math.floor(Math.random() * 16777215).toString(16)}`;

  const generateCurrentPalette = () => {
    const newPalette = Array.from({ length: 5 }, () => generateRandomColor());
    setCurrentPalette(newPalette);
  };

  const savePalette = () => {
    if (currentPalette.length > 0) {
      setSavedPalettes((prevPalettes) => [...prevPalettes, currentPalette]);
      setCurrentPalette([]); // Clear the current palette after saving
    }
  };

  const deletePalette = (index) => {
    setSavedPalettes((prevPalettes) =>
      prevPalettes.filter((_, i) => i !== index)
    );
  };

  return (
    <div className="max-w-screen-md p-8 mx-auto">
      <button
        id="generate"
        className="p-3 m-4 bg-gray-300 rounded-md hover:bg-gray-400 focus:outline-none focus:ring focus:border-blue-300"
        onClick={generateCurrentPalette}
      >
        Generate
      </button>
      <div id="current-palette" className="flex mt-4 space-x-2">
        {currentPalette.map((color, index) => (
          <div
            key={index}
            className="flex items-center justify-center w-auto h-12 px-2 text-white rounded-md color-block"
            style={{ backgroundColor: color }}
          >
            {color}
          </div>
        ))}
      </div>
      <button
        id="save"
        className="px-4 py-2 mt-4 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
        onClick={savePalette}
      >
        Save Palette
      </button>
      <div id="saved-palettes" className="mt-8">
        {savedPalettes.map((palette, index) => (
          <div key={index} className="mb-4">
            {palette.map((color, colorIndex) => (
              <div
                key={colorIndex}
                className="flex items-center justify-center w-auto h-8 my-2 text-white rounded-md color-block"
                style={{ backgroundColor: color }}
              >
                {color}
              </div>
            ))}
            <button
              className="px-2 py-1 ml-2 text-white bg-red-500 rounded-md delete-palette-button hover:bg-red-600 focus:outline-none focus:ring focus:border-blue-300"
              onClick={() => deletePalette(index)}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Day15;
