import React, { useState } from "react";
import StatisticCard from "../../../ui/StatisticCard/statisticCard";

const Cost = () => {
  const [data, setData] = useState({
    title: "SMS Cost",
    icon: "cost",
    value: "27900",
  });

  // useEffect(() => {
  //   async function fetchCost() {
  //     const dataValue = await axios.get(
  //       "https://api.sema.co.tz/api/CheckBalance?api_id=API3462965997&api_password=Licks@2021!"
  //     );
  //     let val =
  //       dataValue.data.CurrenceCode + " " + dataValue.data.BalanceAmount;
  //     setData({
  //       value: val,
  //       icon: "cost",
  //       title: "Cost",
  //     });
  //   }
  //   fetchCost();
  // }, []);

  return (
    <StatisticCard title={data.title} icon={data.icon} value={data.value} />
  );
};
export default Cost;
