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
    <div id="skills" className="h-screen w-full dark:bg-gray-900">
      <div className="m-auto flex h-full max-w-[1040px] flex-col items-center justify-center">
        <h1 className="mb-5 text-center text-4xl font-bold text-[#001b5e] dark:text-[#0097b2]">
          Skills
        </h1>
        <div className="grid grid-cols-2 gap-4 text-center md:grid-cols-3 md:gap-8 lg:grid-cols-6">
          <div className="flex flex-col">
            <div className="group m-4 cursor-pointer rounded bg-gray-100 p-4 shadow-lg shadow-gray-400 duration-300 ease-in hover:scale-110 dark:bg-stone-600 dark:shadow-gray-500">
              <SiHtml5 className="h-auto w-16 fill-stone-600  group-hover:fill-[#F16529] dark:fill-gray-100 dark:group-hover:fill-gray-100 " />
            </div>
            <h3 className="text-xl font-bold text-stone-700 dark:text-stone-300">
              HTML
            </h3>
          </div>
          <div className="flex flex-col">
            <div className="group m-4 cursor-pointer rounded bg-gray-100  p-4 shadow-lg shadow-gray-400 duration-300 ease-in hover:scale-110 dark:bg-stone-600 dark:shadow-gray-500">
              <SiCss3 className="h-auto w-16 fill-stone-600 duration-500 group-hover:fill-[#2965f1] dark:fill-gray-100 dark:group-hover:fill-gray-100" />
            </div>
            <h3 className="text-xl font-bold text-stone-700 dark:text-stone-300">
              CSS
            </h3>
          </div>
          <div className="flex flex-col">
            <div className="group m-4 cursor-pointer rounded bg-gray-100 p-4 shadow-lg shadow-gray-400 duration-300 ease-in hover:scale-110 dark:bg-stone-600 dark:shadow-gray-500">
              <SiJavascript className="h-auto w-16 fill-stone-600  group-hover:fill-[#f0db4f] dark:fill-gray-100 dark:group-hover:fill-gray-100" />
            </div>
            <h3 className="text-xl font-bold text-stone-700 dark:text-stone-300">
              JavaScript
            </h3>
          </div>
          <div className="flex flex-col">
            <div className="group m-4 cursor-pointer rounded bg-gray-100 p-4 shadow-lg shadow-gray-400 duration-300 ease-in hover:scale-110 dark:bg-stone-600 dark:shadow-gray-500">
              <SiReact className="h-auto w-16 fill-stone-600  group-hover:fill-[#61DBFB] dark:fill-gray-100 dark:group-hover:fill-gray-100" />
            </div>
            <h3 className="text-xl font-bold text-stone-700 dark:text-stone-300">
              React
            </h3>
          </div>
          <div className="flex flex-col">
            <div className="group m-4 cursor-pointer rounded bg-gray-100 p-4 shadow-lg shadow-gray-400 duration-300 ease-in hover:scale-110 dark:bg-stone-600 dark:shadow-gray-500">
              <SiTailwindcss className="h-auto w-16 fill-stone-600  group-hover:fill-[#3490dc] dark:fill-gray-100 dark:group-hover:fill-gray-100" />
            </div>
            <h3 className="text-xl font-bold text-stone-700 dark:text-stone-300">
              Tailwind CSS
            </h3>
          </div>
          <div className="flex flex-col">
            <div className="group m-4 cursor-pointer rounded bg-gray-100 p-4 shadow-lg shadow-gray-400 duration-300 ease-in hover:scale-110 dark:bg-stone-600 dark:shadow-gray-500">
              <SiGithub className="h-auto w-16 fill-stone-600  group-hover:fill-[#424242] dark:fill-gray-100 dark:group-hover:fill-gray-100" />
            </div>
            <h3 className="text-xl font-bold text-stone-700 dark:text-stone-300">
              GitHub
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
