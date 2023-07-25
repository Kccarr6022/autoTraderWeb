from fastapi import FastAPI
from dotenv import load_dotenv
import os

load_dotenv()

POLYGON_API_KEY = os.getenv("FINHUB_API_KEY")

app = FastAPI()


@app.get("/current_returns")
def get_current_returns():
    return {"returns": 0.05} 