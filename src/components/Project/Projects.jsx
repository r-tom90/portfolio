import React from "react";
import ProjectItem from "./ProjectItem";
import projectImg1 from "../../assets/portfolio-project/main.png";
import projectImg2 from "../../assets/other-projects/my-store.png";
// import projectImg3 from "../../assets/fakeProject3.png";

const Projects = () => {
  return (
    <div id="projects" className="m-auto max-w-[1040px] p-4 py-16 md:pl-20">
      <h1 className="text-center text-4xl font-bold text-[#001b5e]">
        Projects
      </h1>
      <p className="py-8 text-center">
        Here is a carefully curated selection of my front-end development work.
        These projects demonstrate my skill in various technologies and design
        principles. Each project has been crafted to deliver a visually pleasing
        and user-friendly experience. I hope they provide a good showcase of my
        abilities as a developer.
      </p>
      <div className="grid gap-12 sm:grid-cols-2">
        <ProjectItem img={projectImg1} title="Description of App" />
        <ProjectItem
          img={projectImg2}
          title="Clothing Store"
          stackUsed="Styled Components, React, Redux"
          liveSite="https://my-clothing.vercel.app/"
          viewCode="https://github.com/r-tom90/clothing-store"
        />
        {/* <ProjectItem img={projectImg3} title="Description of App" />
        <ProjectItem img={projectImg3} title="Description of App" /> */}
      </div>
    </div>
  );
};

export default Projects;
