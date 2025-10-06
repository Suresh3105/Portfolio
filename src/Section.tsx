import type React from "react";
import "./index.css";
import mypic from "../src/Image/Mypic.jpg";
import resume from "../src/Image/suresh resume new1 .pdf";

type Info = { name1: string };

const Section: React.FC<Info> = ({ name1 }) => {
  return (
    <section className="pt-20 sm:pt-24 max-h-screen">
      <div className="flex flex-col-reverse md:flex-row items-center justify-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 gap-8">

        {/* Left Text Section */}
        <div className="text-center md:text-left md:flex-1">
          <h1 className="text-3xl sm:text-4xl font-bold text-white">
            Hi, I am {name1}
          </h1>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mt-2">
            Software Engineer
          </h1>
          <p className="text-base sm:text-lg mt-4 text-gray-300 max-w-xl">
            I am a full-stack developer skilled in React, TypeScript, Tailwind CSS,
            Java, and SQL. I have hands-on experience building projects like voice-based
            e-commerce applications and dynamic portfolios. I enjoy collaborating in teams,
            solving problems efficiently, and delivering clean, user-friendly web interfaces.
            Passionate about learning new technologies and creating innovative solutions.
          </p>
          <button className="px-6 py-3 mt-4 rounded-full bg-gradient-to-r from-purple-500 to-purple-800
            transform transition-transform duration-300 ease-in-out hover:scale-110">
            <a href={resume} target="_blank" rel="noreferrer">
              Check Resume
            </a>
          </button>
        </div>

        {/* Right Image Section */}
        <div className="md:flex-1 flex justify-center">
          <img
            src={mypic}
            alt="My Image"
            className="w-60 h-60 sm:w-72 sm:h-72 object-cover rounded-full border-2 border-purple-500 shadow-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Section;
