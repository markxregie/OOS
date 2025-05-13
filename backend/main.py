from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from backend.database import engine
from backend.models import Base
from backend.routers import auth_routes  # ← import your router module

app = FastAPI()

# CORS middleware config
origins = [
    "http://localhost:3000",  # React frontend
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,            # origins allowed to access
    allow_credentials=True,
    allow_methods=["*"],              # allow all HTTP methods (GET, POST, etc.)
    allow_headers=["*"],              # allow all headers
)

# Create database tables
Base.metadata.create_all(bind=engine)

# Include API routes
app.include_router(auth_routes.router)

@app.get("/")
def home():
    return {"message": "Welcome to Bluebean Cafe API"}
