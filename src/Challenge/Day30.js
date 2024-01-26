import { useState } from "react";

export const useTheme = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return { theme, toggleTheme };
};

const Day30 = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div
      style={{
        height: "100vh",
        transition: "0.3s ease-in",
        backgroundColor: theme === "light" ? "white" : "black",
        color: theme === "light" ? "black" : "white",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h1>{theme === "light" ? "Light Theme" : "Dark Theme"}</h1>
      <button
        onClick={toggleTheme}
        className="p-3 my-3 bg-gray-300 rounded-full"
      >
        Toggle Theme
      </button>
    </div>
  );
};

export default Day30;
