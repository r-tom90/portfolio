import React from "react";

const ProjectItem = ({ img, title, stackUsed, liveSite, viewCode }) => {
  return (
    // TODO: Change Color of card
    <div className="group relative flex h-auto w-[100%] items-center justify-center rounded-xl from-rose-400 via-fuchsia-500 to-indigo-500 shadow-xl shadow-gray-400 hover:bg-gradient-to-r">
      <img src={img} alt="/" className="rounded-xl group-hover:opacity-20" />
      <div className="absolute top-[50%] left-[50%] hidden translate-x-[-50%] translate-y-[-50%] text-center group-hover:block ">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="pb-4 pt-2 text-center text-sm text-white">{stackUsed}</p>
        <a
          href={liveSite}
          target="blank"
          className="flex items-center justify-center"
        >
          <p className="mb-2 w-[200px] cursor-pointer rounded-lg bg-white p-3 text-center text-lg font-bold text-gray-700 duration-500 hover:bg-gray-700 hover:text-white">
            Live Demo
          </p>
        </a>
        <a
          href={viewCode}
          target="blank"
          className="flex items-center justify-center"
        >
          <p className="w-[200px] cursor-pointer rounded-lg bg-white p-3 text-center text-lg font-bold text-gray-700 duration-500 hover:bg-gray-700 hover:text-white">
            View Code
          </p>
        </a>
      </div>
    </div>
  );
};

export default ProjectItem;
