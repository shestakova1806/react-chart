import React from "react";
import { Statistic } from "../Statistic/Statistic";
import Avatar from "../../images/Profile/Avatar.svg";
import Pro from "../../images/Profile/Pro.svg";
import Frame from "../../images/Profile/Frame.svg";
import "./Profile.css";

export const Profile = () => {
  return (
    <div className="profile">
      <div className="profileCard">
        <div className="photo">
          <img src={Avatar} alt="Avatar" />
        </div>
        <div className="profileContent">
          <span className="name">Петров Владимир Викторович</span>
          <div className="profile-icons">
            <img src={Pro} alt="Pro" />
            <img src={Frame} alt="Frame" />
          </div>
          <span className="subheader">Роли на платформе</span>
          <span className="content">Представитель компании</span>
          <p className="content description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore ...
          </p>
        </div>
      </div>
      <div>
        <Statistic />
      </div>
    </div>
  );
};
