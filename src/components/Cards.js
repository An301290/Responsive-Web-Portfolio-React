import React from "react";
import CardItem from "./CardItem";
import "./styles/Cards.css";
import image from "./Images/coding-924920_1280.jpg";
import image1 from "./Images/coffee-2737047_1280.jpg";

function Cards() {
  return (
    <div className="cards">
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              href="https://www.behance.net/gallery/113687199/Tattoon-App"
              target="_blank"
              src={image1}
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

export default Cards;
