from api.market_hanlder.market_handler import MarketHandler
from fastapi import FastAPI

market = MarketHandler()


def use(app: FastAPI = None) -> FastAPI:
    @app.get("/trades")
    def get_trades():
        return market.get_watched_trades()

    @app.post("/trade_history")
    def get_trade_history(trade: str):
        return []

    return app
