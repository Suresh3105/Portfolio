
import Contact from "./Contact"
import Education from "./Education"
import Header from "./Header"
import "./index.css"
import Intern from "./Intern"
import Project from "./Project"
import Section from "./Section"
import Skills from "./Skills"

function App() {
  return (
    <div className="snap-y snap-mandatory h-screen overflow-y-scroll scroll-smooth">
     <Header name1="SR Portfolio"/>
    <section id="home" className="snap-start">
      <Section name1="Suresh R"/>
    </section>
    <section id="skill" className="snap-start">
      <Skills/>
    </section>
    <section id="intern" className="snap-start">
      <Intern/>
    </section>
    <section id="project" className="snap-start">
      <Project/>
    </section>
    <section id="education" className="snap-start">
      <Education/>
    </section>
    <section id="contact" className="snap-start">
      <Contact/>
    </section>
   </div>
 

     
  )
}

export default App
