import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import dark from "../images/moon.png";
import light from "../images/sun.png";

function Navbar() {
  const Links = [
    { name: "HOME", link: "/#home" },
    { name: "ABOUT", link: "#about" },
    { name: "PROJECT", link: "#project" },
    { name: "CONTACT", link: "#contact" },
  ];

  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState(null);

  useEffect(() => {
    if (window.matchMedia("prefers-color-scheme: dark").matches) {
      setMode("dark");
    } else {
      setMode("light");
    }
  }, []);

  useEffect(() => {
    if (mode === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [mode]);

  const handleModeSwitch = () => {
    setMode(mode === "dark" ? "light" : "dark");
  };

  return (
    <div className="shadow-md w-screen fixed top-0 left-0 z-[3]">
      <div className="flex items-center justify-between bg-white py-3 md:px-24 px-7 dark:bg-slate-600 ">
        <div className="font-semibold text-2xl cursor-pointer flex items-center text-gray-800 dark:text-white">
          Shivam Maisuriya
        </div>

        <div className="flex">
          <ul
            className={`lg:flex md:items-center font-semibold lg:mb-0 md:pb-0 pb-5  absolute lg:static bg-white dark:bg-slate-600 lg:z-auto z-[-1] left-0 w-full lg:w-auto lg:pl-0 pl-9 transition-all duration-500 ease-in-out lg:duration-0
          ${
            open
              ? "top-16 opacity-100"
              : "top-[-490px] opacity-0 md:opacity-100 "
          }  
          `}
          >
            {Links.map((link) => (
              <li
                key={link.name}
                className="md:ml-8 text-md md:my-0 my-3 border-none"
              >
                <a
                  href={link.link}
                  className="text-gray-800 hover:text-purple-600 dark:hover:text-purple-600 dark:text-white"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          {/* Mode Button */}
          <div className="flex justify-center items-center pr-0">
            <button
              className="bg-purple-600 ring-1 ring-white text-white p-1 md:ml-8 rounded-full hover:bg-purple-800 duration-500 hover:scale-95"
              onClick={handleModeSwitch}
            >
              <img
                className="md:w-5 md:h-5 w-5 h-5"
                alt={mode === "light" ? "dark" : "light"}
                src={mode === "light" ? dark : light}
              />
            </button>
          </div>
          <div
            onClick={() => setOpen(!open)}
            className="text-3xl right-8 top-5 cursor-pointer lg:hidden ml-4"
          >
            <ion-icon name={open ? "close" : "menu"}></ion-icon>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
