import type React from "react";
import "./index.css";
import mypic from "../src/Image/Mypic.jpg"
import resume from "../src/Image/suresh resume new1 .pdf"
type Info = { name1: string };

const Section: React.FC<Info> = ({ name1 }) => {
  return (
    <section className="pt-20 mt-15 max-h-screen">
      <div className="flex justify-center items-center mx-auto">
        {/* Left Text Section */}
        <div className="text-left relative right-20">
          <h1 className="text-4xl font-bold text-white">Hi, I am {name1}</h1>
          <h1 className="text-4xl font-bold text-white mt-2">Software Engineer</h1>
          <p className="text-[20px] mt-4 text-gray-300 max-w-2xl">
            I am a full-stack developer skilled in React, TypeScript, Tailwind CSS, Java, and SQL.
            I have hands-on experience building projects like voice-based e-commerce applications
            and dynamic portfolios. I enjoy collaborating in teams, solving problems efficiently,
            and delivering clean, user-friendly web interfaces. Passionate about learning new
            technologies and creating innovative solutions.
          </p>
        <button className="px-15 py-3 mt-3.5 rounded-full bg-gradient-to-r from bg-purple-500 to-purple-800
        transform transition-transform duration-300 ease-in-out hover:scale-110"> <a href={resume} target="blank">Check Resume</a></button>
         </div>

        {/* Right Image Section */}
        <div className="ml-20">
          <img src={mypic} alt="My Image"
            className="w-72 h-72 mb-10 object-cover rounded-full border-2 border-purple-500 shadow-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Section;
