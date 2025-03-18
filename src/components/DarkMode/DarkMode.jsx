import React, { useState, useEffect } from 'react'
import lightImg from "../../assets/website/light-mode-button.png"
import darkImg from "../../assets/website/dark-mode-button.png"
// import darkimg from "../../assets/website/daek-mode-button.png"
 



export const DarkMode = () => {

  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });

  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };


  return (
    <div className='group relative flex items-center '>
      <button onClick={toggleTheme} className='hidden md:block'>
        <img src={lightImg} alt="Light Img" className={`w-12 shadow-2xl ${theme === "light"? "opacity-100" : "opacity-0"} duration-500`} />
        <img src={darkImg} alt="Dark Img" className={`w-12 shadow-2xl ${theme === "light"? "opacity-0" : "opacity-100"} absolute duration-500 top-[5px] md:top-[3px]`} />
      </button>
    </div>
  )
}

export default DarkMode


