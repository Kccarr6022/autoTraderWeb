from market_trader import Market
from dotenv import load_dotenv
from fastapi import FastAPI
import yfinance as yf
import os

load_dotenv()

POLYGON_API_KEY = os.getenv("FINHUB_API_KEY")

app = FastAPI()
market = Market()


@app.get("/trades")
def get_trades():
    return market.get_watched_trades()

@app.post("/trade_history")
def get_trade_history(trade: str):
    return []