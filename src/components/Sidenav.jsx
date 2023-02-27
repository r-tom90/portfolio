import React, { useState } from "react";
import {
  AiOutlineMenu,
  AiOutlineHome,
  AiOutlineProject,
  AiOutlineMail,
  AiOutlineClose,
} from "react-icons/ai";
import { BsGrid, BsPerson } from "react-icons/bs";
import { GiCheckboxTree } from "react-icons/gi";

const Sidenav = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
    console.log("State has changed");
  };

  return (
    <div>
      {/* Mobile View */}
      {/* Change state of X */}
      {!nav ? (
        <AiOutlineMenu
          onClick={handleNav}
          className="absolute top-4 right-4 z-[99] md:hidden"
          size={25}
        />
      ) : (
        <AiOutlineClose
          onClick={handleNav}
          className="absolute top-4 right-4 z-[99] md:hidden"
          size={25}
        />
      )}
      {nav ? (
        <div className="fixed z-20 flex h-screen w-full flex-col items-center justify-center bg-white/90">
          <a
            onClick={handleNav}
            href="/#main"
            className="m-2 flex w-[75%] cursor-pointer items-center justify-center rounded-full bg-gray-100 p-4 shadow-lg shadow-gray-400 duration-200 ease-in hover:scale-110 hover:text-amber-600"
          >
            {/* // inline style size={20} is the same as tailwind className="w-5 h-auto" */}
            <AiOutlineHome className="h-auto w-5" />
            <span className="pl-4">Home</span>
          </a>
          <a
            onClick={handleNav}
            href="/#about"
            className="m-2 flex w-[75%] cursor-pointer items-center justify-center rounded-full bg-gray-100 p-4 shadow-lg shadow-gray-400 duration-200 ease-in hover:scale-110 hover:text-amber-600"
          >
            <BsPerson className="h-auto w-5" />
            <span className="pl-4">About Me</span>
          </a>
          <a
            onClick={handleNav}
            href="/#skills"
            className="m-2 flex w-[75%] cursor-pointer items-center justify-center rounded-full bg-gray-100 p-4 shadow-lg shadow-gray-400 duration-200 ease-in hover:scale-110 hover:text-amber-600"
          >
            <GiCheckboxTree className="h-auto w-5" />
            <span className="pl-4">Skills</span>
          </a>
          <a
            onClick={handleNav}
            href="/#work"
            className="m-2 flex w-[75%] cursor-pointer items-center justify-center rounded-full bg-gray-100 p-4 shadow-lg shadow-gray-400 duration-200 ease-in hover:scale-110 hover:text-amber-600"
          >
            <BsGrid className="h-auto w-5" />
            <span className="pl-4">Work</span>
          </a>
          <a
            onClick={handleNav}
            href="/#projects"
            className="m-2 flex w-[75%] cursor-pointer items-center justify-center rounded-full bg-gray-100 p-4 shadow-lg shadow-gray-400 duration-200 ease-in hover:scale-110 hover:text-amber-600"
          >
            <AiOutlineProject className="h-auto w-5" />
            <span className="pl-4">Projects</span>
          </a>
          <a
            onClick={handleNav}
            href="/#contact"
            className="m-2 flex w-[75%] cursor-pointer items-center justify-center rounded-full bg-gray-100 p-4 shadow-lg shadow-gray-400 duration-200 ease-in hover:scale-110 hover:text-amber-600"
          >
            <AiOutlineMail className="h-auto w-5" />
            <span className="pl-4">Contact</span>
          </a>
        </div>
      ) : (
        ""
      )}

      <div className="fixed top-[25%] z-10 hidden md:block">
        <div className="flex flex-col">
          <a
            href="#main"
            className="group m-2 cursor-pointer rounded-full bg-gray-100 p-4 shadow-lg shadow-gray-400 duration-300 ease-in hover:scale-110"
          >
            {/* Change hover fill */}
            <AiOutlineHome className="h-auto w-5 duration-1000 group-hover:fill-[#0097b2]" />
          </a>
          <a
            href="#about"
            className="group m-2 cursor-pointer rounded-full bg-gray-100 p-4 shadow-lg shadow-gray-400 duration-300 ease-in hover:scale-110"
          >
            <BsPerson className="h-auto w-5 duration-1000 group-hover:fill-[#0097b2]" />
          </a>
          <a
            href="#skills"
            className="group m-2 cursor-pointer rounded-full bg-gray-100 p-4 shadow-lg shadow-gray-400 duration-300 ease-in hover:scale-110"
          >
            <GiCheckboxTree className="h-auto w-5 duration-1000 group-hover:fill-[#0097b2]" />
          </a>
          <a
            href="#work"
            className="group m-2 cursor-pointer rounded-full bg-gray-100 p-4 shadow-lg shadow-gray-400 duration-300 ease-in hover:scale-110"
          >
            <BsGrid className="h-auto w-5 duration-1000 group-hover:fill-[#0097b2]" />
          </a>
          <a
            href="#projects"
            className="group m-2 cursor-pointer rounded-full bg-gray-100 p-4 shadow-lg shadow-gray-400 duration-300 ease-in hover:scale-110"
          >
            <AiOutlineProject className="h-auto w-5 duration-1000 group-hover:fill-[#0097b2]" />
          </a>
          <a
            href="#contact"
            className="group m-2 cursor-pointer rounded-full bg-gray-100 p-4 shadow-lg shadow-gray-400 duration-300 ease-in hover:scale-110"
          >
            <AiOutlineMail className="h-auto w-5 duration-1000 group-hover:fill-[#0097b2]" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sidenav;
