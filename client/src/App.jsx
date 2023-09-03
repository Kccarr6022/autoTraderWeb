import "./App.css";
import { useEffect, useState } from "react";
import SideBar from "./components/SideBar";
import TradePlotter from "./components/TradePlotter";

function App() {
  const [trades, setTrades] = useState([]);
  const [trade, setTrade] = useState("");

  useEffect(() => {
    getTrades();
  }, []);

  const getTrades = async () => {
    axios
      .get(process.env.REACT_APP_API_ADDRESS + "/trades")
      .then((res) => {
        setTrades(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <section className="w-screen h-screen fixed">
      <header className="bg-primary text-secondary py-4 h-[10vh]">
        <h1 className="text-3xl font-bold underline text-center">
          Auto Trader
        </h1>
      </header>
      <main className="flex">
        <SideBar />
        <TradePlotter trade={trade} />
      </main>
    </section>
  );
}

export default App;
