from fastapi import FastAPI
from routes import auth

app = FastAPI()

@app.get("/")
def read_root():
    return {"message": "Auth Service is working!"}

app.include_router(auth.router)
