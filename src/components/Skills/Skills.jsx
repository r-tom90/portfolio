import React from "react";
import { AiFillHtml5 } from "react-icons/ai";
import {
  SiCss3,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiReact,
  SiTailwindcss,
} from "react-icons/si";

const Skills = () => {
  return (
    <div id="skills" className="h-screen w-full">
      <div className="m-auto flex h-full max-w-[1040px] flex-col items-center justify-center">
        <h1 className="mb-5 text-center text-4xl font-bold text-[#001b5e]">
          Skills
        </h1>
        <div className="grid grid-cols-2 gap-4 text-center md:grid-cols-3 md:gap-8 lg:grid-cols-6 ">
          <div className="flex flex-col">
            <div className="group m-4 cursor-pointer rounded bg-gray-100 p-4 shadow-lg shadow-gray-400 duration-300 ease-in hover:scale-110">
              <SiHtml5 className="h-auto w-16 fill-stone-600 duration-500 group-hover:fill-[#F16529] " />
            </div>
            <h3 className="text-xl font-bold text-stone-700">HTML</h3>
          </div>
          <div className="flex flex-col">
            <div className="group m-4 cursor-pointer rounded bg-gray-100 p-4 shadow-lg shadow-gray-400 duration-300 ease-in hover:scale-110">
              <SiCss3 className="h-auto w-16 fill-stone-600 duration-500 group-hover:fill-[#2965f1]" />
            </div>
            <h3 className="text-xl font-bold text-stone-700">CSS</h3>
          </div>
          <div className="flex flex-col">
            <div className="group m-4 cursor-pointer rounded bg-gray-100 p-4 shadow-lg shadow-gray-400 duration-300 ease-in hover:scale-110">
              <SiJavascript className="h-auto w-16 fill-stone-600 duration-500 group-hover:fill-[#f0db4f]" />
            </div>
            <h3 className="text-xl font-bold text-stone-700">JavaScript</h3>
          </div>
          <div className="flex flex-col">
            <div className="group m-4 cursor-pointer rounded bg-gray-100 p-4 shadow-lg shadow-gray-400 duration-300 ease-in hover:scale-110">
              <SiReact className="h-auto w-16 fill-stone-600 duration-500 group-hover:fill-[#61DBFB]" />
            </div>
            <h3 className="text-xl font-bold text-stone-700">React</h3>
          </div>
          <div className="flex flex-col">
            <div className="group m-4 cursor-pointer rounded bg-gray-100 p-4 shadow-lg shadow-gray-400 duration-300 ease-in hover:scale-110">
              <SiTailwindcss className="h-auto w-16 fill-stone-600 duration-500 group-hover:fill-[#3490dc]" />
            </div>
            <h3 className="text-xl font-bold text-stone-700">Tailwind CSS</h3>
          </div>
          <div className="flex flex-col">
            <div className="group m-4 cursor-pointer rounded bg-gray-100 p-4 shadow-lg shadow-gray-400 duration-300 ease-in hover:scale-110">
              <SiGithub className="h-auto w-16 fill-stone-600 duration-500 group-hover:fill-[#424242]" />
            </div>
            <h3 className="text-xl font-bold text-stone-700">GitHub</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
