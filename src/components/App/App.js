import React from "react";
import { Menu } from "../Menu/Menu";
import { Nav } from "../Nav/Nav";
import { Profile } from "../Profile/Profile";
import "./App.css";

export const App = () => {
  return (
    <div className="app">
      <div className="main">
        <div className="menuBar">
          <Menu />
        </div>
        <div className="center">
          <div className="navBar">
            <Nav />
          </div>
          <div className="profileInfo">
            <Profile />
          </div>
        </div>
      </div>
    </div>
  );
};
