from .trading_view import TradingViewClient
from typing import List
import yaml
import os


class MarketHandler:
    trading_view: TradingViewClient
    watched_trades: List[str]

    def __init__(self):
        self.watched_trades = self.__get_watched_trades_from_yaml()

    def poll_trade_history(self, trade: str) -> List[str]:
        return []

    def get_watched_trades(self) -> List[str]:
        return self.watched_trades

    def __get_watched_trades_from_yaml(self) -> List[str]:
        with open("config/trades_to_watch.yaml", "r") as file:
            return yaml.safe_load(file)
