import React from "react";
import { Line } from "react-chartjs-2";

const config = {
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
  },
};

export const Chart = ({ chartData }) => (
  <div className="chart">
    <Line data={chartData} options={config} />
  </div>
);
