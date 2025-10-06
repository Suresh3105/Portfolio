import type React from "react";
import "./index.css";

type Info = { name1: string };

const Header: React.FC<Info> = ({ name1 }) => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-black/80 backdrop-blur z-50 w-full">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between px-4 sm:px-6 lg:px-10 py-3">
        <h1 className="font-bold text-xl sm:text-2xl lg:text-3xl text-lime-100">{name1}</h1>
        <nav className="flex flex-wrap gap-4 sm:gap-6 text-gray-300 text-base">
          <a href="#home" className="hover:text-gray-100">Home</a>
          <a href="#skill" className="hover:text-gray-100">Skill</a>
          <a href="#intern" className="hover:text-gray-100">Internship</a>
          <a href="#project" className="hover:text-gray-100">Project</a>
          <a href="#education" className="hover:text-gray-100">Education</a>
          <a href="#contact" className="hover:text-gray-100">Contact</a>
        </nav>

      </div>
    </header>
  );
};

export default Header;
