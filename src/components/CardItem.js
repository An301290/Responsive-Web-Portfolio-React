import React from "react";
import { Link } from "react-router-dom";

import "./styles/Cards.css";

const CardItem = (props) => {
  return (
    <>
      <li className="cards__item">
        <Link
          rel="stylesheet"
          href=""
          className="cards__item__link"
          to={props.path}
        >
          <figure className="cards__item__pic-wrap" data-category={props.label}>
            <img src={props.src} alt="Portfolio" className="cards__item__img" />
          </figure>
          <div className="cards__item__info">
            <h3 className="cards__item__text">{props.text}</h3>
            <p className="cards__item__p">{props.paragraph}</p>
            <p className="cards__item_tools">{props.tools}</p>
          </div>
        </Link>
      </li>
    </>
  );
};

export default CardItem;
