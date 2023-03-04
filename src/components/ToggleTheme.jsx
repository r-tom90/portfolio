import { useEffect, useState } from "react";
import { MdDarkMode } from "react-icons/md";
import { BsSunFill } from "react-icons/bs";

const ToggleTheme = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  return (
    <>
      {theme === "light" ? (
        <button
          className="group m-2 cursor-pointer rounded-full bg-gray-700 p-4 shadow-lg shadow-gray-400 duration-300 ease-in hover:scale-110"
          onClick={handleThemeSwitch}
        >
          <BsSunFill className="h-auto w-5 fill-yellow-400 duration-1000" />
        </button>
      ) : (
        <button
          className="group m-2 cursor-pointer rounded-full bg-gray-200 p-4 shadow-lg shadow-gray-400 duration-300 ease-in hover:scale-110"
          onClick={handleThemeSwitch}
        >
          <MdDarkMode className="h-auto w-5 fill-yellow-400 duration-1000" />
        </button>
      )}
    </>
  );
};

export default ToggleTheme;
