import React, { useState } from "react";
import { Link } from "react-router-dom";
import dark from '../images/moon.png'
import light from '../images/sun.png'

function Navbar() {
  const Links = [
    { name: "HOME", link: "/" },
    { name: "ABOUT", link: "/about" },
    { name: "PROJECT", link: "/project" },
    { name: "CONTACT", link: "/contact" },
  ];

  const [open, setOpen] = useState(false);
  const [mode , setMode] = useState(true)

  return (
    <div className="shadow-lg w-full fixed top-0 left-0 z-[3]">
      <div className="md:flex items-center justify-between bg-white py-4 md:px-20 px-7">
        <div className="font-semibold text-2xl cursor-pointer flex items-center text-gray-800">
          Shivam Maisuriya
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-5 cursor-pointer md:hidden "
        >
          <ion-icon name={open ? "close" : "menu"}></ion-icon>
        </div>

        <ul
          className={`md:flex md:items-center font-semibold md:mb-0 md:pb-0 pb-5 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in-out
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
              className="md:ml-8 text-lg md:my-0 my-3 border-none"
            >
              <Link
                to={link.link}
                className="text-gray-800 hover:text-purple-800 duration-500"
              >
                {link.name}
              </Link>
            </li>
          ))}

          {/* Resume Button */}
          <div className="">
            <button className="bg-purple-700 text-white py-1 px-1 md:ml-8 rounded-full hover:bg-purple-800 duration-500 hover:scale-95" onClick={() => setMode(!mode)}>
              
              <img 
                className="w-5" 
                alt=""
                src={mode ? dark : light} 
              />

            </button>
          </div>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
