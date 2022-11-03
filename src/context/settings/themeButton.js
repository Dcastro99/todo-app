import React, { useContext } from "react";
import { ThemeContext } from "./themeContext";

import '../../style/themeBtn.css'


function ThemeBotton() {
  const { darkMode, setDarkMode } = useContext(ThemeContext);
  const handleTheme = () => {
    setDarkMode(!darkMode);
    localStorage.setItem("darkMode", !darkMode);
  };
  return (
    <>
      <button
        id='themeBtn'
        style={darkMode ? { borderColor: '#EFE7BC' } : { borderColor: 'salmon' }}
        className={
          darkMode
            ? "dark-mode"
            : ""
        }
        onClick={handleTheme}
      > Dark - Mode</button >


    </>
  );
}

export default ThemeBotton;