import React, { useMemo, useState } from "react";
import { Chart } from "../Chart/Chart";
import { Legend } from "../Legend/Legend";
import "./App.css";

export const App = () => {
  const [chartData] = useState({
    labels: ["", "", "", "", "", "", "", ""],
    datasets: [
      {
        label: "Участвует в мероприятиях",
        data: [0.2, 1.2, 1.3, 1.5, 1.7, 1.4, 1.1, 0.6],
        borderColor: ["#ED5338"],
        backgroundColor: "rgba(0, 0, 0, 0)",
        pointBackgroundColor: "rgba(0, 0, 0, 0)",
        pointBorderColor: "rgba(0, 0, 0, 0)",
        borderWidth: 2,
      },
      {
        label: "Участвует в проектах",
        data: [0.2, 0.8, 1, 1.2, 1.5, 1.4, 1, 0.7],
        borderColor: ["#2EB349"],
        backgroundColor: "rgba(0, 0, 0, 0)",
        pointBackgroundColor: "rgba(0, 0, 0, 0)",
        pointBorderColor: "rgba(0, 0, 0, 0)",
        borderWidth: 2,
      },
      {
        label: "Инвестирует в проектах",
        data: [0.3, 0.5, 1.1, 1.4, 1.2, 1.3, 1, 0.7],
        borderColor: ["#4E8EF8"],
        backgroundColor: "rgba(0, 0, 0, 0)",
        pointBackgroundColor: "rgba(0, 0, 0, 0)",
        pointBorderColor: "rgba(0, 0, 0, 0)",
        borderWidth: 2,
      },
    ],
  });

  const legends = useMemo(
    () =>
      chartData.datasets.map((dataset, index) => ({
        label: dataset.label,
        color: dataset.borderColor.toString(),
        key: index,
      })),
    [chartData.datasets]
  );

  return (
    <div className="app">
      <div className="widget">
        <Chart chartData={chartData} />
        <Legend legends={legends} />
      </div>
    </div>
  );
};
