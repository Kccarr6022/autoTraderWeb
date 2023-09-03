import {
  LineChart,
  CartesianGrid,
  Line,
  Tooltip,
  XAxis,
  YAxis,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { useEffect, useState } from "react";
import axios from "axios";

const TradePlotter = ({ trade }) => {
  const [tradeHistory, setTradeHistory] = useState([
    {
      date: "8/07",
      price: 11,
      lowBand: 10,
      highBand: 12,
    },
    {
      date: "8/08",
      price: 15,
      lowBand: 14,
      highBand: 16,
    },
    {
      date: "8/09",
      price: 5,
      lowBand: 4,
      highBand: 6,
    },
    {
      date: "8/10",
      price: 10,
      lowBand: 9,
      highBand: 11,
    },
    {
      date: "8/11",
      price: 9,
      lowBand: 8,
      highBand: 10,
    },
    {
      date: "8/12",
      price: 10,
      lowBand: 9,
      highBand: 11,
    },
  ]);

  const getTradeHistory = async (trade) => {
    axios
      .post(import.meta.env.VITE_API_ADDRESS + "/trade_history", {
        trade: trade,
      })
      .then((res) => {
        setTradeHistory(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    const intervalCall = setInterval(() => {
      getTradeHistory(trade);
    }, 1000);
    return () => {
      clearInterval(intervalCall);
    };
  }, []);

  return (
    <section className="relative w-[calc(100vw - 250px)]">
      <ResponsiveContainer
        className="bg-gray-700 absolute bottom-5 left-0 right-0 top-0"
        aspect={1.8}
      >
        <LineChart data={tradeHistory}>
          <CartesianGrid />
          <XAxis dataKey="date" interval={"preserveStartEnd"} />
          <YAxis dataKey="price"></YAxis>
          <Legend />
          <Tooltip />
          <Line dataKey="price" stroke="blue" activeDot={{ r: 5 }} />
          <Line dataKey="lowBand" stroke="red" activeDot={{ r: 5 }} />
          <Line dataKey="highBand" stroke="green" activeDot={{ r: 5 }} />
        </LineChart>
      </ResponsiveContainer>
    </section>
  );
};

export default TradePlotter;
