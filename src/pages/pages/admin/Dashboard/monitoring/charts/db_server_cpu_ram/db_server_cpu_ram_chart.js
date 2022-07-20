import axios from "axios";
import React, { useState, useEffect } from "react";
import Chart from "react-apexcharts";
import { Card } from "react-bootstrap";

import usePalette from "../../../../../../../hooks/usePalette";

const DBServerCpuRamUsageChart = () => {
  const palette = usePalette();
  const [ramData, setRamData] = useState([]);
  const [cpuData, setCpuData] = useState([]);
  const [timer, setTimer] = useState(null);
  const [isMounted, setIsMounted] = useState(false);

  async function updateResourceUsage() {
    try {
      const response = await axios.post(
        "https://admin.sema.co.tz/Common/GetResourceUsage"
      );
      if (response.status === 200) {
        const resource = response.data.resource;
        cpuData.push(resource["CPUUsage"]);
        ramData.push(resource["RAMUsage"]);
      }
    } catch (e) {
      console.log("Resource usage: ", e);
    }
    clearTimeout(timer);
    setTimer(setTimeout(updateResourceUsage, 200));
  }
  useEffect(() => {
    if (!isMounted) {
      updateResourceUsage();
      setIsMounted(true);
    }
  });

  const data = [
    {
      name: "RAM",
      data: ramData,
    },
    {
      name: "CPU",
      data: cpuData,
    },
  ];

  const options = {
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    // xaxis: {
    //   type: "datetime",
    //   categories: [
    //     "2018-09-19T00:00:00",
    //     "2018-09-19T01:30:00",
    //     "2018-09-19T02:30:00",
    //     "2018-09-19T03:30:00",
    //     "2018-09-19T04:30:00",
    //     "2018-09-19T05:30:00",
    //     "2018-09-19T06:30:00",
    //   ],
    // },
    xaxis: {
      labels: {
        show: false,
      },
    },
    tooltip: {
      x: {
        format: "dd/MM/yy HH:mm",
      },
    },
    colors: [
      palette.primary,
      palette.success,
      palette.warning,
      palette.danger,
      palette.info,
    ],
  };

  return (
    <Card>
      <Card.Header>
        <Card.Title tag="h5">DB SERVER CPU & RAM USAGE</Card.Title>
        <h6 className="card-subtitle text-muted">Track your system usage</h6>
      </Card.Header>
      <Card.Body>
        <div className="chart w-100">
          <Chart options={options} series={data} type="area" height="350" />
        </div>
      </Card.Body>
    </Card>
  );
};

export default DBServerCpuRamUsageChart;
