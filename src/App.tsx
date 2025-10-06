import Contact from "./Contact";
import Education from "./Education";
import Header from "./Header";
import "./index.css";
import Intern from "./Intern";
import Project from "./Project";
import Section from "./Section";
import Skills from "./Skills";

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans scroll-smooth">
      {/* Header - fixed at top for all devices */}
      <Header name1="SR Portfolio" />

      {/* Scroll container with snap effect */}
      <main className="snap-y snap-mandatory h-screen overflow-y-scroll">
        {/* Home */}
        <section id="home" className="snap-start flex items-center justify-center px-4 sm:px-6 lg:px-10">
          <Section name1="Suresh R" />
        </section>

        {/* Skills */}
        <section id="skill" className="snap-start px-4 sm:px-6 lg:px-10">
          <Skills />
        </section>

        {/* Internship */}
        <section id="intern" className="snap-start px-4 sm:px-6 lg:px-10">
          <Intern />
        </section>

        {/* Projects */}
        <section id="project" className="snap-start px-4 sm:px-6 lg:px-10">
          <Project />
        </section>

        {/* Education */}
        <section id="education" className="snap-start px-4 sm:px-6 lg:px-10">
          <Education />
        </section>

        {/* Contact */}
        <section id="contact" className="snap-start px-4 sm:px-6 lg:px-10">
          <Contact />
        </section>
      </main>
    </div>
  );
}

export default App;
