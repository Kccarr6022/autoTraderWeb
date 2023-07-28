// import recharts from "recharts";
import { useEffect, useState } from "react";

const TradePlotter = ({ trade }) => {
  const [tradeHistory, setTradeHistory] = useState([]);

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
    <section>
      <recharts.LineChart
        width={500}
        height={300}
        data={tradeHistory}
      ></recharts.LineChart>
    </section>
  );
};

export default TradePlotter;
