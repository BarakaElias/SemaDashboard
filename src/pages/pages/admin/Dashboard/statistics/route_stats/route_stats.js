import React from "react";
import { Pie } from "react-chartjs-2";

import usePalette from "../../../../../../hooks/usePalette";

const RouteStatsPieChart = () => {
  const palette = usePalette();

  const data = {
    labels: ["Pending", "Acknowledged", "Accepted", "Delivered"],
    datasets: [
      {
        data: [260, 125, 54, 146],
        backgroundColor: [
          palette.primary,
          palette.warning,
          palette.danger,
          "#E8EAED",
        ],
        borderColor: "transparent",
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    legend: {
      display: true,
    },
  };

  return <Pie data={data} options={options} />;
};

export default RouteStatsPieChart;
