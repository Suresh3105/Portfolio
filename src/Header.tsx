import type React from "react";
import "./index.css";

type Info = { name1: string };

const Header: React.FC<Info> = ({ name1 }) => {
  return (
    <div>
      <header className="fixed top-0 left-0 right-5 bg-black/80 backdrop-blur z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
          {/* Logo / Name */}
          <h1 className="font-bold text-2xl text-lime-100">{name1}</h1>

          {/* Navigation */}
          <nav className="flex gap-6 text-[20px] text-gray-300">
          <a href="#home" className="hover:text-gray-100">Home</a>
          <a href="#skill" className="hover:text-gray-100">Skill</a>
          <a href="#intern" className="hover:text-gray-100">Internship</a>
          <a href="#project" className="hover:text-gray-100">Project</a>
          <a href="#education" className="hover:text-gray-100">Education</a>
          <a href="#contact" className="hover:text-gray-100">Contact</a>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Header;
