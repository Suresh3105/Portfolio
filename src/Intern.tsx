import type { FC } from "react"
import "./index.css"

const Intern:FC=()=>{
    return(
        <section className="max-h-screen">
            <div className="w-7xl ml-20">
                 <h2 className="text-4xl text-center sm:text-5xl font-extrabold underline decoration-amber-500 text-white mb-2">Internship</h2>
                <div className="flex flex-col text-white">
                <h1 className=" text-4xl font-bold text-amber-400">Front End Developer</h1>
                <h1 className="text-3xl mt-6">IBM Skill Build [EDUNET]</h1>
                <p className="mt-6">July 2024 - September-2024</p>
                <ul className="ml-8 mt-3 pl-8 text-lg list-disc">
                    <li> <p className="mt-4">Developed and maintained responsive user interfaces (UI) using React and standard web technologies (HTML5 & CSS3/Tailwind), ensuring a consistent and high-quality user experience across all device platforms.</p></li>
                    <li><p className="mt-4">Integrated RESTful APIs using JavaScript's modern fetch or Axios to efficiently connect the React front-end with dynamic and scalable backend services.</p></li>
                    <li><p className="mt-4">Managed complex application state using React Hooks (e.g., useState, useEffect) and leveraged component-based architecture to ensure modularity, data flow, and efficient front-end rendering.</p></li>
                    <li><p className="mt-4">Optimized application performance by implementing code splitting and lazy loading (using React.lazy and Suspense), which significantly reduced initial load times and improved time-to-interactivity.</p></li>
                    <li><p className="mt-4">Collaborated seamlessly with back-end developers and design teams to translate high-fidelity mockups into functional, full-stack solutions, ensuring smooth feature deployment and technical alignment.</p></li>
                </ul>
               <h2 className="mt-5 text-xl">Skills:  HTML , CSS , JavaScript , React</h2>
            </div>
            <img className="w-2xl h-[400px] mt-[200px] ml-8" src="https://cdn.pixabay.com/photo/2020/01/26/20/14/computer-4795762_1280.jpg" alt="" />
            </div>
        </section>
    )
}
export default Intern;