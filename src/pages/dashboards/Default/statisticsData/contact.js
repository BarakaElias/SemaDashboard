import React, { useState, useEffect } from "react";
import axios from "axios";
import StatisticCard from "../../../ui/StatisticCard/statisticCard";

const Contact = () => {
  const [data, setData] = useState({
    title: "SMS Sent",
    icon: "cost",
    value: "27900",
  });

  useEffect(() => {
    async function fetchBalance() {
      try {
        const dataValue = await axios.get(
          "https://api.sema.co.tz/api/CheckBalance?api_id=API3462965997&api_password=Licks@2021!"
        );
        let val =
          dataValue.data.CurrenceCode + " " + dataValue.data.BalanceAmount;
        setData({
          value: val,
          icon: "contact",
          title: "Total Contacts",
        });
      } catch (e) {}
    }
    fetchBalance();
  }, []);

  return (
    <StatisticCard title={data.title} icon={data.icon} value={data.value} />
  );
};
export default Contact;
