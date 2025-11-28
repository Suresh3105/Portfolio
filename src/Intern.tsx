import type { FC } from "react";
import "./index.css";
import computer from "../public/Image/computer.jpg";
const Intern: FC = () => {
  return (
    <section className="max-h-screen px-4 sm:px-6 lg:px-10 py-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-12">

        {/* Left Content */}
        <div className="flex-1 text-white text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl font-extrabold underline decoration-amber-500 mb-4">
            Internship
          </h2>

          <h1 className="text-3xl sm:text-4xl font-bold text-amber-400">
            Front End Developer
          </h1>
          <h1 className="text-2xl mt-2 sm:mt-4">IBM Skill Build [EDUNET]</h1>
          <p className="mt-1 sm:mt-2 text-base sm:text-lg">
            July 2024 - September 2024
          </p>

          <ul className="ml-0 md:ml-6 mt-4 sm:mt-6 pl-4 text-base sm:text-lg list-disc space-y-2 sm:space-y-4">
            <li>
              Developed and maintained responsive UIs using React, HTML5, CSS3,
              and Tailwind, ensuring a consistent experience across all devices.
            </li>
            <li>
              Integrated RESTful APIs using Fetch and Axios to connect the React
              front-end with scalable backend services.
            </li>
            <li>
              Managed application state with React Hooks (useState, useEffect),
              using a modular, component-based architecture.
            </li>
            <li>
              Optimized performance with code splitting and lazy loading
              (React.lazy + Suspense), reducing load times.
            </li>
            <li>
              Collaborated with back-end developers and designers to transform
              mockups into full-stack solutions.
            </li>
          </ul>

          <h2 className="mt-4 sm:mt-6 text-lg sm:text-xl font-semibold">
            Skills: <span className="text-amber-400">HTML, CSS, JavaScript, React</span>
          </h2>
        </div>

        {/* Right Image */}
        <div className="flex-1 flex justify-center md:justify-end">
          <img
            className="w-full max-w-md sm:max-w-lg md:max-w-xl h-60 sm:h-80 md:h-96 rounded-lg shadow-lg object-cover"
            src={computer}
            alt="Front End Development Internship"
          />
        </div>

      </div>
    </section>
  );
};

export default Intern;
