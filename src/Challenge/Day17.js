import { useState } from "react";

export default function Day17() {
  const [activeIndex, setActiveIndex] = useState(0);

  const accordionData = [
    { Question: "Question 1", Answer: "Answer 1" },
    { Question: "Question 2", Answer: "Answer 2" },
    { Question: "Question 3", Answer: "Answer 3" },
    { Question: "Question 4", Answer: "Answer 4" },
  ];

  const handleToggle = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <>
      <div className="flex flex-col p-2 space-y-3">
        {accordionData.map((data, index) => (
          <div
            key={index}
            className={`accordion bg-gray-200 p-3 rounded-md transition-transform ${
              activeIndex === index ? "transform bg-gray-300" : ""
            }`}
            onClick={() => handleToggle(index)}
          >
            <div className="font-bold text-black question">{data.Question}</div>
            {activeIndex === index && (
              <div className="mt-2 answer">{data.Answer}</div>
            )}
          </div>
        ))}
      </div>
    </>
  );
}
