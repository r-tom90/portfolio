import React from "react";

const About = () => {
  return (
    <div id="about" className="h-screen w-full">
      <div className="m-auto flex h-full w-full max-w-[1040px] flex-col items-center justify-center">
        <h1 className="mb-4 text-center text-4xl font-bold text-[#001b5e]">
          About Me
        </h1>
        <img
          className="h-auto w-[15%] rounded-full bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-gray-400 to-[#001b5e] md:w-[10%]"
          src="../src/assets/Profile.png"
          alt="Profile picture"
        />

        <div className="max-w-[1040px] p-4 text-center md:p-6">
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
