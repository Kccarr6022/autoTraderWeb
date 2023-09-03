from .http_client import HttpClient
import abc


class ClientApi(abc.ABC):
    def __init__(self, http_client: HttpClient):
        self._http_client = http_client or HttpClient()

    @abc.abstractmethod
    def get_trades(self):
        pass

    @abc.abstractmethod
    def get_trade(self, trade: str):
        pass
