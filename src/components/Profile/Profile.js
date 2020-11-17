import React from "react";
import { Statistic } from "../Statistic/Statistic";
import { Carousel } from "../Carousel/Carousel";
import Avatar from "../../images/Profile/Avatar.svg";
import Pro from "../../images/Profile/Pro.svg";
import Frame from "../../images/Profile/Frame.svg";
import Connect from "../../images/Profile/Connect.svg";
import Edit from "../../images/Profile/Edit.svg";
import Note from "../../images/Profile/Note.svg";
import People from "../../images/Profile/People.svg";
import Person from "../../images/Profile/Person.svg";
import Star from "../../images/Profile/Star.svg";
import ArrowRight from "../../images/Profile/ArrowRight.svg";
import "./Profile.css";

export const Profile = () => {
  return (
    <div className="profile">
      <div className="profileCard">
        <div className="personalInfo">
          <div className="photo">
            <img src={Avatar} alt="Avatar" />
          </div>
          <div className="profileContent">
            <span className="name">Петров Владимир Викторович</span>
            <div className="profileIcons">
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
        <div className="othetInfo">
          <div className="specialIcons">
            <a href="#">
              <img src={Note} alt="Note" />
            </a>
            <a href="#">
              <img src={Edit} alt="Edit" />
            </a>
            <a href="#">
              <img src={Person} alt="Person" />
            </a>
            <a href="#">
              <img src={Connect} alt="Connect" />
            </a>
          </div>
          <div className="worksheet">
            <div className="needs">
              <div className="subheader sheet">Потребности</div>
              <div className="blocks">
                <div className="content box consult">
                  <div className="circle yellow" />
                  Карьерная консультация
                </div>
                <div className="content box coach">
                  <div className="circle yellow" />
                  Коучинг
                </div>
              </div>
            </div>
            <div className="department">
              <div className="subheader sheet">Отрасль/сфера деятельности</div>
              <div className="blocks">
                <div className="content box robot">
                  <div className="circle red" />
                  Роботизация
                </div>
              </div>
            </div>
            <div className="results">
              <div className="subheader sheet">Результаты</div>
              <button className="lab">
                <div className="buttonText">Лаборатория профиля</div>
                <img
                  src={ArrowRight}
                  alt="Arrow Right"
                  className="buttonImage"
                />
              </button>
            </div>
            <div className="activity">
              <div className="subheader sheet">Активность на платформе</div>
              <div className="blocks">
                <div className="job">
                  <img src={Star} alt="Star" className="jobImage" />
                  Основатель
                </div>
                <div className="job">
                  <img src={People} alt="People" className="jobImage" />
                  Участник
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="rightSide">
          <Statistic />
          <Carousel />
        </div>
      </div>
    </div>
  );
};
