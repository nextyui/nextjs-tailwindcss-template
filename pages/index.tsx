import React from "react";
import { useTheme } from "../hooks/useTheme";

const HomePage = () => {
  const { darkMode, setDarkMode } = useTheme();
  return (
    <div className="w-screen h-screen flex items-center justify-center flex-col gap-10">
      <p className="text-[10rem] font-black">Hello, world!</p>
      <button
        className={`bg-blue-500 text-white h-14 px-8 rounded-xl text-xl shadow-lg shadow-blue-500/50`}
        onClick={() => {
          setDarkMode(!darkMode);
        }}
      >
        {darkMode ? "Disable Dark Mode" : "Enable Dark Mode"}
      </button>
    </div>
  );
};

export default HomePage;
