import React from "react";
import "../../App.css";
import Cards from "../Cards";
import Footer from "../Footer";
import HeroSection from "../HeroSection";
import Contact from "./Contact";
import Resume from "./Resume";

function About() {
  return (
    <div>
      <HeroSection />
      <Cards />
      <Resume />
      <Contact />
      <Footer />
    </div>
  );
}

export default About;
