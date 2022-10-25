import React, { useContext } from "react";
import { ThemeContext } from "./themeContext";
import './themeBtn.css'

function ThemeBotton() {
  const { darkMode, setDarkMode } = useContext(ThemeContext);
  const handleTheme = () => {
    setDarkMode(!darkMode);
    localStorage.setItem("darkMode", !darkMode);
  };
  return (
    <button
      id='themeBtn'

      className={
        darkMode
          ? "dark-mode"
          : ""
      }
      onClick={handleTheme}
    >Dark-Mode</button>
  );
}

export default ThemeBotton;