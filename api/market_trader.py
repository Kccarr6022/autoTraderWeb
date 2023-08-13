from typing import List
import yaml


class Market:
    watched_trades: List[str]

    def __init__(self):
        self.watched_trades = self.__get_watched_trades_from_yaml()

    def get_watched_trades(self) -> List[str]:
        return self.watched_trades

    def __get_watched_trades_from_yaml(self) -> List[str]:
        with open('trades_to_watch.yaml', 'r') as file:
            return yaml.safe_load(file)