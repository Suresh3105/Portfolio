import type { FC } from "react";
import "./index.css";
import Ecommerce from "../public/Image/Ecommerce.png";
import Insta from "../public/Image/Screenshot (13).png";
import College from "../public/Image/CollegeManage.png";

const Project: FC = () => {
  return (
    <section className="snap-start bg-gray-900">
      <h1 className="text-white mt-5 lg:mt-40 text-4xl font-bold underline decoration-amber-600 flex justify-center mb-8">
        Projects
      </h1>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row flex-wrap gap-6 px-4 sm:px-6 lg:px-10 justify-center">
        
        {/* Project Card 1 */}
        <div className="flex-1 min-w-[280px] max-w-sm border-2 border-gray-300 rounded-lg bg-white
          transition duration-300 ease-in-out hover:scale-[1.03] hover:shadow-lg p-4">
          <img src={Ecommerce} className="w-full h-56 sm:h-64 object-cover rounded-t-lg" alt="E-commerce Project" />
          <h1 className="mt-3 font-bold text-xl">AI based Voice assistant for Ecommerce Application</h1>
          <h2 className="mt-2 text-gray-500">Tools: React js, TypeScript, Tailwind CSS, Firebase</h2>
          <p className="mt-2 text-gray-700 text-base">A user-friendly web app to explore and search food items and recipes, built with HTML, CSS, and JavaScript for an interactive experience.</p>
        </div>

        {/* Project Card 2 */}
        <div className="flex-1 min-w-[280px] max-w-sm border-2 border-gray-300 rounded-lg bg-white
          transition duration-300 ease-in-out hover:scale-[1.03] hover:shadow-lg p-4">
          <img src={Insta} className="w-full h-56 sm:h-64 object-cover rounded-t-lg" alt="Instagram Clone" />
          <h1 className="mt-3 font-bold text-xl text-center">Instagram Clone</h1>
          <h2 className="mt-2 text-gray-500">Tools: React js, JavaScript, CSS</h2>
          <p className="mt-2 text-gray-700 text-base">This project reproduces core Instagram. It focuses on UI/UX, accessibility, responsive layout, and interactive behaviors (posting, liking, commenting, following simulation).</p>
        </div>

        {/* Project Card 3 */}
        <div className="flex-1 min-w-[280px] max-w-sm border-2 border-gray-300 rounded-lg bg-white
          transition duration-300 ease-in-out hover:scale-[1.03] hover:shadow-lg p-4">
          <img src={College}
            className="w-full h-56 sm:h-64 object-cover rounded-t-lg" alt="School Management System" />
          <h1 className="mt-3 font-bold text-xl">School Management System</h1>
          <h2 className="mt-2 text-gray-500">Tools: Java, SQL</h2>
          <p className="mt-2 text-gray-700 text-base">A user-friendly School Management System built with Java, designed to manage students, faculty, courses, and departments efficiently with an interactive console/GUI experience.</p>
        </div>

      </div>
    </section>
  );
};

export default Project;
