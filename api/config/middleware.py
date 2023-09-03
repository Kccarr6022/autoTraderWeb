from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware


def use(app: FastAPI = None) -> FastAPI:
    # apply cross origin resource sharing
    app.add_middleware(
        CORSMiddleware,
        allow_origins=["*"],
        allow_credentials=True,
        allow_methods=["*"],
        allow_headers=["*"],
        expose_headers=["*"],
    )
    return app
