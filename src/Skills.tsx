import { type FC } from "react";
import "./index.css";

type Skill = {
  name: string;
  icon: string;
};

const SkillItem: FC<Skill> = ({ name, icon }) => (
  <div className="flex flex-col items-center justify-center p-4 m-2 bg-black rounded-lg shadow-xl transition transform hover:scale-105 duration-300">
    <img src={icon} alt={name} className="w-16 h-16 object-contain" />
    <p className="text-white text-md sm:text-lg font-semibold mt-3 text-center">{name}</p>
  </div>
);

const frontEndSkills: Skill[] = [
  { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "Tailwind CSS", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1280px-Tailwind_CSS_Logo.svg.png" },
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "TypeScript", icon: "https://cdn.worldvectorlogo.com/logos/typescript-2.svg" },
];

const otherSkills: Skill[] = [
  { name: "C++ / Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
  { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
  { name: "SQL", icon: "https://www.techmonitor.ai/wp-content/uploads/sites/29/2016/06/SQL.png" },
  { name: "Spreadsheet", icon: "https://upload.wikimedia.org/wikipedia/commons/3/34/Microsoft_Office_Excel_%282019%E2%80%93present%29.svg" },
];

const Skills: FC = () => {
  return (
    <section className="bg-gray-700 mt-30 lg:mt-10 py-10 px-4 sm:px-6 lg:px-10 min-h-screen flex flex-col items-center">
      
      {/* Header */}
      <div className="text-center">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-3 border-b-4 border-yellow-500 inline-block pb-1">
          My Skills
        </h2>
        <p className="text-lg sm:text-xl text-gray-400 mt-2">The tools and technologies I work with</p>
      </div>
      
      {/* Skills Sections */}
      <div className="flex flex-col lg:flex-row justify-center gap-10 w-full max-w-6xl">
        
        {/* Front End */}
        <div className="w-full lg:w-1/2">
          <h3 className="text-2xl sm:text-3xl text-yellow-500 font-bold mb-6 text-center lg:text-left">
            Front End Development
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4 justify-items-center">
            {frontEndSkills.map(skill => (
              <SkillItem key={skill.name} name={skill.name} icon={skill.icon} />
            ))}
          </div>
        </div>

        {/* Back End & Tools */}
        <div className="w-full lg:w-1/2 mt-10 lg:mt-0">
          <h3 className="text-2xl sm:text-3xl text-yellow-500 font-bold mb-6 text-center lg:text-left">
            Back End & Other Competencies
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4 justify-items-center">
            {otherSkills.map(skill => (
              <SkillItem key={skill.name} name={skill.name} icon={skill.icon} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;
