import { useState } from "react";

export default function Day28() {
  const [isOn, setIsOn] = useState(true);

  const toggleButton = () => {
    setIsOn((prevState) => !prevState);
  };

  return (
    <>
      <div className="p-32">
        <h1 className="my-12 text-xl text-center">Toogle Button</h1>
        <button
          id="toggle"
          style={{
            padding: "10px 20px",
            borderRadius: "30px",
            backgroundColor: isOn ? "black" : "lightgray",
            color: isOn ? "white" : "black",
          }}
          onClick={toggleButton}
        >
          {isOn ? "on" : "off"}
        </button>
      </div>
    </>
  );
}
