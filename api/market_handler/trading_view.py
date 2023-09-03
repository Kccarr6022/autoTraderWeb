from .client_api import ClientApi


class TradingViewClient(ClientApi):
    def __init__(self, http_client):
        super().__init__(http_client)

    def get_price(self, symbol: str, exchange: str):
        return self.http_client.get_price(symbol, exchange)
