import React from "react";
import { Button } from "./Button";
import photo from "./Images/photo_portfolio.JPG";
import "./styles/HeroSection.css";
import "../App.css";
import "../components/styles/Social_Icons_Photo.css";
import video from "./Videos/Lines - 4760.mp4";
import Portfolio from "./Pages/Portfolio";
import Resume from "./Pages/Resume";
import { Link } from "react-router-dom";
import { AiFillGithub, AiFillBehanceCircle } from "react-icons/ai";
import { TiSocialLinkedinCircular } from "react-icons/ti";

function HeroSection() {
  return (
    <div className="hero-container">
      <video type="video/mp4" src={video} autoPlay loop muted />
      <h1>
        Hi I'm <span>Angel</span>
      </h1>
      <p>
        <span>Full Stack Web Developer</span> with
        <span> UX design backgroung</span> based in Berlin, with a strong
        customer focus and deep understanding of how to approach problems from a
        human-centered perspective.
      </p>
      <br></br>
      <br></br>
      <div className="box">
        <div className="picture">
          <div className="imgBx">
            <img src={photo} alt="Angel" classNameName="photo" />
          </div>
          <div className="details">
            <h2>
              Angel Samano Hamud<span>Web Developer & UX Designer</span>
            </h2>
            <ul className="social-icons">
              <li>
                <a
                  href="https://www.linkedin.com/in/angel-samano-hamud/"
                  target="_blank"
                >
                  <i>
                    <AiFillGithub />
                  </i>
                </a>
              </li>
              <li>
                <a href="https://www.behance.net/AngelSamUx" target="_blank">
                  <i>
                    <AiFillBehanceCircle />
                  </i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/angel-samano-hamud/"
                  target="_blank"
                >
                  <i>
                    <TiSocialLinkedinCircular />
                  </i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
