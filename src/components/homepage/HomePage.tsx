import { Element } from "react-scroll";
import { About } from "./about/About";
import { Contact } from "./contact/Contact";
import { Footer } from "./footer/Footer";
import { Home } from "./home/Home";
import { Navbar } from "./navbar/Navbar";
import { Programming } from "./programming/Programming";
import { Projects } from "./projects/Projects";

export const HomePage = () => (
  <div>
    <Navbar />
    <Element name="home" className="py-20 px-4">
      <Home />
    </Element>
    <Element name="about" className="py-20 px-4">
      <About />
    </Element>
    <Element name="projects" className="py-20 px-4">
      <Projects />
    </Element>
    <Element name="programming" className="py-20 px-4">
      <Programming />
    </Element>
    <Element name="contact" className="py-20 px-4">
      <Contact />
    </Element>
    <Footer />
  </div>
);
