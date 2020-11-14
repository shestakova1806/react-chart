import React from "react";
import { Chart } from "../Chart/Chart";
import { Legend } from "../Legend/Legend";
import "./App.css";

export const App = () => {
  return (
    <div className="app">
      <div className="chart">
        <Chart />
        <Legend />
      </div>
    </div>
  );
};
