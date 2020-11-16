import React from "react";
import "./Nav.css";

export const Nav = () => {
  return (
    <div className="nav">
      <a href="#" className="choice active">
        Мой рабочий стол
      </a>
      <a href="#" className="choice">
        Картотека
      </a>
      <a href="#" className="choice">
        Мои чаты
      </a>
      <a href="#" className="choice">
        Сервисы
      </a>
    </div>
  );
};
