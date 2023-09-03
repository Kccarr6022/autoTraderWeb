from dotenv import load_dotenv
from fastapi import FastAPI
from api.config import middleware
import api.routes as routes
import uvicorn

load_dotenv()

fast_api = FastAPI()
fast_api = middleware.use(fast_api)
fast_api = routes.use(fast_api)

if __name__ == "__main__":
    uvicorn.run(fast_api, host="0.0.0.0", port=5000)
