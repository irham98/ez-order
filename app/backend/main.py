from fastapi import FastAPI
from payment import endpoints

PROJECT_NAME = 'EzOrder'
YOUR_DOMAIN = 'http://127.0.0.1:8000'

app = FastAPI(
    title=PROJECT_NAME
)

app.include_router(endpoints.router, prefix='/payment', tags=['payment'])