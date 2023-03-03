import React from "react";
import ProjectItem from "./ProjectItem";
import portfolio from "../../assets/portfolio-project/main.png";
import myStore from "../../assets/other-projects/my-store.png";
import weatherApp from "../../assets/other-projects/weather.png";
import vanillaCalc from "../../assets/other-projects/calculator.png";

const Projects = () => {
  return (
    <div id="projects" className="m-auto max-w-[1040px] p-4 py-16 md:pl-20">
      <h1 className="text-center text-4xl font-bold text-[#001b5e]">
        Projects
      </h1>
      <p className="py-5 text-center">
        Here is a carefully curated selection of my front-end development work.
        These projects demonstrate my skill in various technologies and design
        principles. Each project has been crafted to deliver a visually pleasing
        and user-friendly experience. I hope they provide a good showcase of my
        abilities as a developer.
      </p>
      <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
        <ProjectItem
          img={portfolio}
          title="Description of App"
          stackUsed="React, Tailwind CSS"
          liveSite="https://richard-tom-portolio.vercel.app/"
          viewCode="https://github.com/r-tom90/portfolio.git"
        />
        <ProjectItem
          img={myStore}
          title="Clothing Store"
          stackUsed="Styled Components, React, Redux"
          liveSite="https://my-clothing.vercel.app/"
          viewCode="https://github.com/r-tom90/clothing-store"
        />
        <ProjectItem
          img={weatherApp}
          title="Weather App."
          stackUsed="React, Tailwind CSS"
          liveSite="https://my-weather-app-ashen.vercel.app/"
          viewCode="https://github.com/r-tom90/weather-app"
        />
        <ProjectItem
          img={vanillaCalc}
          title="Basic Calculator"
          stackUsed="HTML, Tailwind CSS, JavaScript"
          liveSite="https://r-tom90.github.io/basic-calculator/"
          viewCode="https://github.com/r-tom90/basic-calculator"
        />
        {/* TODO: 'View More' Projects */}
        {/* TODO: React Calculator */}
        {/* TODO: React Todo List */}
      </div>
    </div>
  );
};

export default Projects;
