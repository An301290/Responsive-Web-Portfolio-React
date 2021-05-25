import React from "react";
import { Button } from "./Button";
import photo from "./Images/IMG_5415.JPG";
import "./styles/HeroSection.css";
import "../App.css";

function HeroSection() {
  return (
    <div className="hero-container">
      {/* <video
        type="video/mp4"
        src="/src/components/Videos/Cave - 45340.mp4"
        autoPlay
        loop
        muted
      /> */}
      <h1>
        Hi I'm <span>Angel</span>
      </h1>
      <img src={photo} alt="Angel" className="photo" />
      <p>
        <span>Web Developer</span> & <span>UX Designer</span> based in
        Berlin, with a strong customer focus and deep
        understanding of how to approach problems from a human-centered
        perspective.
      </p>
      <p></p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          Portfolio
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          Resume
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
