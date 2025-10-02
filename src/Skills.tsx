import { type FC } from "react";
import "./index.css"; // Assuming you have some global styles here

// 1. Define the type for a Skill object
type Skill ={
    name: string;
    icon: string;
}

// 2. Helper component to render a single skill item
// type SkillItemProps= {
//     name: string;
//     icon: string;
// }

const SkillItem: FC<Skill> = ({ name, icon }) => (
    <div className="flex flex-col items-center justify-center p-4 m-2 bg-black rounded-lg shadow-xl transition transform hover:scale-105 duration-300">
        <img src={icon} alt={name} className="w-16 h-16 object-contain" />
        <p className="text-white text-md font-semibold mt-3 text-center">{name}</p>
    </div>
);


// --- Data Arrays (Simplified & Combined) ---
const frontEndSkills: Skill[] = [
    { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: " Tailwind CSS", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1280px-Tailwind_CSS_Logo.svg.png" },
    { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    // Only keep the most relevant for a fresher to start with
    { name: "TypeScript", icon: "https://cdn.worldvectorlogo.com/logos/typescript-2.svg" },
];

const otherSkills: Skill[] = [
    { name: "C++ / Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" }, 
    { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
    { name: "SQL", icon: "https://www.techmonitor.ai/wp-content/uploads/sites/29/2016/06/SQL.png" },
    { name: "Spreadsheet", icon: "https://upload.wikimedia.org/wikipedia/commons/3/34/Microsoft_Office_Excel_%282019%E2%80%93present%29.svg" }, 
    // Add a basic language you might know
]

const Skills: FC = () => {
    return (
        <section className="bg-gray-700 flex flex-col items-center mt-35 h-screen">
            
            {/* --- Skills Header --- */}
            <div className="text-center mb-12">
                <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-3 border-b-4 border-yellow-500 inline-block pb-1">My Skills</h2>
                <p className="text-lg text-gray-400 mt-2">The tools and technologies I work with</p>
            </div>
            
            {/* --- Main Content Container --- */}
            <div className="w-full max-w-6xl px-4 flex flex-col lg:flex-row justify-center gap-10">

                {/* --- Front End Section --- */}
                <div className="w-full lg:w-1/2">
                    <h3 className="text-3xl text-yellow-500 font-bold mb-6 text-center">Front End Development</h3>
                    
                    {/* Grid Layout for Skills: 2 columns on small, 3 columns on medium+ */}
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 justify-items-center">
                        {frontEndSkills.map(skill => (
                            <SkillItem key={skill.name} name={skill.name} icon={skill.icon} />
                        ))}
                    </div>
                </div>

                {/* --- Other Skills / Tools Section --- */}
                <div className="w-full lg:w-1/2 mt-10 lg:mt-0">
                    <h3 className="text-3xl text-yellow-500 font-bold mb-6 text-center">Back End & Other Competencies</h3>

                    {/* Grid Layout for Tools */}
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 justify-items-center">
                        {otherSkills.map(skill => (
                            <SkillItem key={skill.name} name={skill.name} icon={skill.icon} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills;