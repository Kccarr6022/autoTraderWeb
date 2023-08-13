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
      .post(process.env.REACT_APP_API_ADDRESS + "/trade_history", {
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
    getTradeHistory(trade);
  }, [trade]);

  return (
    <section className="bg-green-900 h-screen m-1">
      <ResponsiveContainer
        width="100%"
        height="100%"
        className="bg-gray-700"
        aspect={1.5}
      >
        <LineChart
          margin={{ left: 25, top: 25, right: 25, bottom: 50 }}
          data={tradeHistory}
        >
          <CartesianGrid />
          <XAxis dataKey="date" interval={"preserveStartEnd"} />
          <YAxis dataKey="price"></YAxis>
          <Legend />
          <Tooltip />
          <Line dataKey="price" stroke="white" activeDot={{ r: 5 }} />
          <Line dataKey="lowBand" stroke="white" activeDot={{ r: 5 }} />
          <Line dataKey="HighBand" stroke="white" activeDot={{ r: 5 }} />
        </LineChart>
      </ResponsiveContainer>
    </section>
  );
};

export default TradePlotter;
