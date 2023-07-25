from fastapi import FastAPI

app = FastAPI()


@app.get("/current_returns")
def get_current_returns():
    return {"returns": 0.05} 