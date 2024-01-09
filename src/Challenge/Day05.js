import React, { useState } from "react";

const Day05 = () => {
  const [votes, setVotes] = useState([0, 0, 0, 0]);

  const handleVote = (optionIndex) => {
    const newVotes = [...votes];
    newVotes[optionIndex] += 1;
    setVotes(newVotes);
  };

  return (
    <div className="max-w-md p-4 mx-auto mt-8 bg-white rounded-md shadow-md">
      <h4 className="mb-4 text-2xl font-bold text-center">
        What is your favorite color?
      </h4>

      {votes.map((count, index) => (
        <button
          key={index}
          className="w-full px-4 py-2 mb-2 text-white bg-blue-500 rounded-md option hover:bg-blue-700"
          onClick={() => handleVote(index)}
        >
          <span className="mr-2">Option {index + 1}</span>
          <span>{count} votes</span>
        </button>
      ))}
    </div>
  );
};

export default Day05;
