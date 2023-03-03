import React from "react";
import WorkItem from "./WorkItem";
import data from "./WorkData";

const Work = () => {
  return (
    <div
      id="work"
      className="m-auto flex h-screen w-full max-w-[1040px] flex-col items-center justify-center p-4 py-16"
    >
      <div className="h-auto w-full">
        <h1 className="mb-5 text-center text-4xl font-bold text-[#001b5e]">
          Work
        </h1>
        {data.map((item, idx) => (
          <WorkItem
            // Key is always required, more info here: https://www.youtube.com/watch?v=J_S97E8xjcA
            key={idx}
            year={item.year}
            title={item.title}
            company={item.company}
            details={item.details}
          />
        ))}
      </div>
    </div>
  );
};

export default Work;
