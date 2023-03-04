import React from "react";
import Profile from "../assets/Profile.png";

const About = () => {
  return (
    <div id="about" className="h-screen w-full dark:bg-gray-900">
      <div className="m-auto flex h-full w-full max-w-[1040px] flex-col items-center justify-center">
        <h1 className="mb-5 text-center text-4xl font-bold text-[#001b5e] dark:text-[#0097b2]">
          About Me
        </h1>
        <img
          className="h-auto w-[15%] from-[#0097b2] to-[#030720] dark:rounded-3xl dark:bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] md:w-[10%]"
          src={Profile}
          alt="Profile picture"
        />

        <div className="max-w-[1040px] p-4 text-center dark:text-stone-300 md:p-6">
          <p className=" mb-4">
            I'm a skilled and passionate front-end developer, driven by a desire
            to create exceptional digital experiences. With a focus on building
            responsive web applications, I have a keen eye for detail and a
            talent for delivering projects that not only look great, but also
            provide a seamless user experience.
          </p>
          <p className="mb-4">
            I have a strong passion for coding and design, and I strive to
            continuously improve my skills and stay up-to-date with the latest
            industry trends. Whether working independently or as part of a team,
            I am dedicated to delivering high-quality results and going above
            and beyond to exceed client expectations.
          </p>
          <p className=" mb-4 ">
            When I'm not coding, I enjoy exploring new technologies and keeping
            up with the latest developments in the field. I am always seeking
            new challenges and opportunities to grow and improve as a developer.
          </p>
          <p className="mb-4">
            Take a look at my portfolio to see some of my previous work and
            discover why I am a trusted and experienced front-end developer.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
