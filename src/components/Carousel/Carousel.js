import React from "react";
import Avatar1 from "../../images/Carousel/Avatar1.svg";
import Avatar2 from "../../images/Carousel/Avatar2.svg";
import Avatar3 from "../../images/Carousel/Avatar3.svg";
import Avatar4 from "../../images/Carousel/Avatar4.svg";
import Avatar5 from "../../images/Carousel/Avatar5.svg";
import Avatar6 from "../../images/Carousel/Avatar6.svg";
import Avatar7 from "../../images/Carousel/Avatar7.svg";
import BlueArrowR from "../../images/Carousel/BlueArrowR.svg";
import BlueArrowL from "../../images/Carousel/BlueArrowL.svg";
import "./Carousel.css";

export const Carousel = () => {
  return (
    <div className="carousel">
      <div className="subheader forCarousel">Связанные профили</div>
      <div className="carouselBox">
        <div className="boxWrap">
          <img src={Avatar1} alt="Avatar1" />
          <img src={Avatar2} alt="Avatar2" />
          <img src={Avatar3} alt="Avatar3" />
          <img src={Avatar4} alt="Avatar4" />
          <img src={Avatar5} alt="Avatar5" />
          <img src={Avatar6} alt="Avatar6" />
          <img src={Avatar7} alt="Avatar7" />
        </div>
      </div>
      <div className="navigation">
        <a href="#">
          <img src={BlueArrowL} alt="BlueArrowL" />
        </a>
        <div className="dots">
          <div className="dotItem"></div>
          <div className="dotItem activeDot"></div>
          <div className="dotItem"></div>
        </div>
        <a href="#">
          <img src={BlueArrowR} alt="BlueArrowR" />
        </a>
      </div>
    </div>
  );
};
