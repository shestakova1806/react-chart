import React from "react";
import Arrow from "../../images/Menu/Arrow.svg";
import Artplay from "../../images/Menu/Artplay.svg";
import BlueNote from "../../images/Menu/BlueNote.svg";
import Box from "../../images/Menu/Box.svg";
import Edit from "../../images/Menu/Edit.svg";
import Kalendar from "../../images/Menu/Kalendar.svg";
import Locked from "../../images/Menu/Locked.svg";
import Plus from "../../images/Menu/Plus.svg";
import Logo from "../../images/Menu/Logo.svg";
import Organizations from "../../images/Menu/Organizations.svg";
import Profile from "../../images/Menu/Profile.svg";
import Projects from "../../images/Menu/Projects.svg";
import "./Menu.css";

export const Menu = () => {
  return (
    <div className="menu">
      <a href="#" className="logo">
        <img src={Logo} alt="Logo" />
      </a>

      <div className="menuChoice">
        <a href="#" className="menuItem">
          <img src={Profile} alt="Profile" className="icon" />
          Профиль
        </a>
      </div>

      <div className="menuChoice">
        <a href="#" className="menuItem">
          <img src={Projects} alt="Projects" className="icon" />
          Проекты
        </a>
        <a href="#">
          <img src={Plus} alt="Plus" className="edit" />
        </a>
      </div>

      <a href="#" className="otherItem">
        <img src={Artplay} alt="Artplay" className="otherImage" />
        Art-museum
        <img src={Edit} alt="Plus" className="edit" />
      </a>

      <div className="menuChoice">
        <a href="#" className="menuItem">
          <img src={Organizations} alt="Organizations" className="icon" />
          Организации
        </a>
        <a href="#">
          <img src={Plus} alt="Plus" className="edit" />
        </a>
      </div>

      <div className="menuChoice">
        <a href="#" className="menuItem">
          <img src={Kalendar} alt="Kalendar" className="icon" />
          Мероприятии
        </a>
        <a href="#">
          <img src={Plus} alt="Plus" className="edit" />
        </a>
      </div>

      <div className="menuChoice">
        <a href="#" className="menuItem">
          <img src={Box} alt="Box" className="icon" />
          Товары
        </a>
        <a href="#">
          <img src={Locked} alt="Locked" className="edit" />
        </a>
      </div>

      <div className="menuChoice">
        <a href="#" className="menuItem">
          <img src={BlueNote} alt="BlueNote" className="icon" />
          Избранное
        </a>
        <a href="#">
          <img src={Locked} alt="Locked" className="edit" />
        </a>
      </div>
    </div>
  );
};
