import React from "react";
import { Line } from "react-chartjs-2";

export const Chart = () => {
  const data = {
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
  };

  const options = {
    scales: {
      xAxes: [
        {
          gridLines: {
            display: false,
          },
        },
      ],
      yAxes: [
        {
          gridLines: {
            display: false,
          },
          ticks: {
            min: 0.2,
            max: 2,
          },
          afterBuildTicks: function (Chart) {
            Chart.ticks = [];
          },
        },
      ],
    },
    legend: {
      display: false,
      position: "bottom",
      align: "start",
      onClick: () => {},
      labels: {
        boxWidth: 10,
        fontColor: "#111B42",
        fontFamily: "Proxima Nova",
        fontStyle: "normal",
        fontSize: 14,
        padding: 10,
      },
    },
  };

  return (
    <div className="chart">
      <Line data={data} options={options} />
    </div>
  );
};
