import { useHistory } from "react-router-dom";
import React from "react";
import "../../App.css";
import CardItem from "../CardItem.js";
import "../styles/Cards.css";
import image from "../Images/coding-924920_1280.jpg";
import "../styles/Portfolio.css";
import Footer from "../Footer";
import video from "../Videos/Lines - 4760.mp4";
import pdfSample from "./../../sample.pdf";
import PdfFile from "./../PdfFile"
function Portfolio() {
  let history = useHistory();

  function handleClick() {
    history.push("/home");
  }

  return (
    <div className="cards">
        <PdfFile pdf={pdfSample} />
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              onClick={handleClick}
              path="/portfolio"
              src={image}
              target="_blank"
              label="Tattoon"
              text="Tattoo app"
              paragraph="Tattoon provides users with a platform that guides them through the whole process of getting a tattoo: from getting inspired to booking a meeting with an artist. They can see a preview of how the tattoo is going to look on the skin via AR."
              tools="Research, Information Arquitecture, Wireframes, Prototyping, UX Design, Usability Testing, UI"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
