import type { FC } from "react"
import "./index.css"
import Ecommerce from "./Image/Ecommerce.png";
import Insta from "./Image/Screenshot (13).png"

const Project: FC = () => {
    return (
        <section className="h-screen snap-start mt-15">
            <h1 className="text-white text-4xl mt-8 font-bold underline decoration-amber-600 flex justify-center">Projects</h1>
            
            {/* Removed flex-1 and h-[50%] from parent. Kept gap-4 for spacing. */}
            <div className="flex flex-row m-5 p-5 text-gray-500 mt-3 justify-center gap-4"> 
                
                {/* 1. Project Card 1: Added 'flex-1' for equal width and 'p-4' for content padding */}
                <div className="flex-1 border-2 border-gray-300 rounded-lg bg-white
                    transition duration-300 ease-in-out hover:scale-[1.03] hover:shadow-lg 
                    p-4">
                    {/* 2. Set image to w-full to fill the card's width */}
                    <img src={Ecommerce} className="w-full h-[250px] object-cover rounded-t-lg" alt="E-commerce Project" /> 
                    <h1 className="mt-3 font-bold text-xl">AI based Voice assistant for Ecommerce Application</h1>
                    <h2 className="mt-3 text-lg text-gray-500">Tools : React js , TypeScript , Tailwind CSS , Firebase</h2>
                    <p className="text-lg mt-3">A user-friendly web app to explore and search food items and recipes, built with HTML, CSS, and JavaScript for an interactive experience.</p>
                </div>

                {/* Project Card 2: Applied the same structure */}
                <div className="flex-1 border-2 border-gray-300 rounded-lg bg-white 
                    transition duration-300 ease-in-out hover:scale-[1.03] hover:shadow-lg 
                    p-4">
                    {/* Set image to w-full to fill the card's width */}
                    <img src={Insta} className="w-full h-[250px] object-cover rounded-t-lg" alt="E-commerce Project" />
                    <h1 className="mt-3 font-bold text-xl text-center">Instagram Clone</h1>
                    <h2 className="mt-3 text-lg text-gray-500">Tools : React js , JavScript , CSS</h2>
                    <p className="text-lg mt-3">This project reproduces core Instagram. It focuses on UI/UX, accessibility, responsive layout, and interactive behaviors (posting, liking, commenting, following simulation).</p>
                </div>

                {/* Project Card 3: Applied the same structure */}
                <div className="flex-1 border-2 border-gray-300 rounded-lg bg-white
                    transition duration-300 ease-in-out hover:scale-[1.03] hover:shadow-lg 
                    p-4">
                    {/* Set image to w-full to fill the card's width */}
                    <img src="https://user-images.githubusercontent.com/70682152/184478211-eee21a28-62ff-41e1-a006-12d560189566.png" 
                    className="w-full h-[250px] object-cover rounded-t-lg" alt="E-commerce Project" />
                    <h1 className="mt-3 font-bold text-xl">School Management System</h1>
                    <h2 className="mt-3 text-lg text-gray-500">Tools : Java , SQL</h2>
                    <p className="text-lg mt-3">A user-friendly School Management System built with Java, designed to manage students, faculty, courses, and departments efficiently with an interactive console/GUI experience.”.</p>
                </div>
            </div>
        </section>
    )
}
export default Project;