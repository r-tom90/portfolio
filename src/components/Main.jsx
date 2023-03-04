import React from "react";
import { TypeAnimation } from "react-type-animation";
import backgroundImg from "../assets/headerImage.jpeg";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaMedium,
  FaTwitter,
} from "react-icons/fa";

const Main = () => {
  return (
    <div id="main">
      <img
        className="h-screen w-full scale-x-[none] object-cover object-left"
        // TODO: Change background Image
        src={backgroundImg}
        // src="../../src/assets/headerImage.jpeg"
        // If failure: https://unsplash.com/photos/XMEzTVjlReU
        alt="MacBook half folded down"
      />
      <div className="absolute top-0 left-0 h-screen w-full bg-white/60 dark:bg-gray-900/60">
        <div className="m-auto flex h-full w-full max-w-[700px] flex-col items-center justify-center lg:items-start">
          <h1 className="text-4xl font-bold text-gray-800 dark:text-stone-300 sm:text-5xl">
            I'm Richard Tom
          </h1>
          <h2 className="flex pt-4 text-2xl text-gray-800 dark:text-stone-300 sm:text-3xl">
            I am a
            <div className="text-[#0097b2]">
              <TypeAnimation
                sequence={[
                  "Front End Developer",
                  1500,
                  "Tech Enthusiast",
                  1500,
                  "Aspiring ",
                  "Aspiring Fullstack Developer",
                  1500,
                  "Aspiring",
                  "Aspiring Blockchain Developer",
                  1500,
                ]}
                wrapper="div"
                cursor={true}
                repeat={Infinity}
                style={{ fontSize: "1em", paddingLeft: "5px" }}
              />
            </div>
          </h2>
          <div className="flex w-full max-w-[200px] justify-between pt-6 md:max-w-[300px]">
            {/* //TODO: Change Color of Icons with fill */}
            <a href="https://github.com/r-tom90" target="blank">
              <FaGithub className="h-auto w-5 cursor-pointer fill-gray-800 duration-1000 hover:fill-[#424242] dark:fill-stone-300 md:scale-125" />
            </a>
            <a
              href="https://www.linkedin.com/in/richard-tom-81b0956b/"
              target="blank"
            >
              <FaLinkedin className="h-auto w-5 cursor-pointer fill-gray-800 duration-1000 hover:fill-[#0077B5] dark:fill-stone-300 md:scale-125" />
            </a>
            <a href="https://twitter.com/CryptoFallen" target="blank">
              <FaTwitter className="h-auto w-5 cursor-pointer fill-gray-800 duration-1000 hover:fill-[#1DA1F2] dark:fill-stone-300 md:scale-125" />
            </a>
            <a href="https://medium.com/@richardtom_79153" target="blank">
              <FaMedium className="h-auto w-5 cursor-pointer fill-gray-800 duration-1000  hover:bg-black hover:fill-white dark:fill-stone-300 md:scale-125" />
            </a>
            {/* <a href="http://twitter.com" target="blank">
              <FaInstagram className="h-auto w-5 cursor-pointer fill-gray-800 dark:fill-stone-300  duration-1000 hover:fill-[#E1306C] md:scale-125" />
            </a> */}
            {/* <a href="http://twitter.com" target="blank">
                  <FaFacebook
                    className="w-5 h-auto md:scale-125 cursor-pointer fill-gray-800 dark:fill-stone-300 hover:fill-[#0077B5] duration-1000"
                  />
                </a> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
