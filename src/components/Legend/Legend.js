import React from "react";
import "./Legend.css";

export const Legend = ({ legends = [] }) => (
  <ul className="legend">
    {legends.map(({ label, color, key }) => {
      return (
        <li className="legend-item" key={key}>
          <span
            className="legend-dot"
            style={{ backgroundColor: color }}
          ></span>
          <span>{label}</span>
        </li>
      );
    })}
  </ul>
);
