from fastapi import APIRouter, HTTPException, Depends, status
from fastapi.security import OAuth2PasswordBearer
from fastapi.security import OAuth2PasswordRequestForm
from pydantic import BaseModel
from passlib.context import CryptContext
from jose import jwt, JWTError
from datetime import datetime, timedelta
import os
from dotenv import load_dotenv
from database import get_db_connection

load_dotenv()
router = APIRouter()

# --- JWT config ---
SECRET_KEY = os.getenv("SECRET_KEY", "GVd3U5v4hz7dHLXYtZGZYu6D4P2jQm6UjK9hFCt3ErA=")
ALGORITHM = os.getenv("ALGORITHM", "HS256")
ACCESS_TOKEN_EXPIRE_MINUTES = int(os.getenv("ACCESS_TOKEN_EXPIRE_MINUTES", 30))

# --- Password hashing ---
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

oauth2_scheme = OAuth2PasswordBearer(tokenUrl="login")

def hash_password(password: str):
    return pwd_context.hash(password)

def verify_password(plain: str, hashed: str):
    return pwd_context.verify(plain, hashed)

# --- Request and response models ---
class UserCreate(BaseModel):
    username: str
    password: str

class Token(BaseModel):
    access_token: str
    token_type: str

# --- Register route ---
@router.post("/register")
async def register(user: UserCreate):
    conn = await get_db_connection()
    cursor = await conn.cursor()

    await cursor.execute("SELECT * FROM users WHERE username = ?", (user.username,))
    existing_user = await cursor.fetchone()
    if existing_user:
        await conn.close()
        raise HTTPException(status_code=400, detail="Username already exists")

    hashed_pw = hash_password(user.password)
    await cursor.execute(
        "INSERT INTO users (username, password) VALUES (?, ?)",
        (user.username, hashed_pw)
    )
    await conn.commit()
    await conn.close()
    return {"message": "User registered successfully"}

# --- Login route ---
@router.post("/login", response_model=Token)
async def login(form_data: OAuth2PasswordRequestForm = Depends()):
    conn = await get_db_connection()
    cursor = await conn.cursor()

    # form_data.username and form_data.password come from form-encoded input
    await cursor.execute("SELECT * FROM users WHERE username = ?", (form_data.username,))
    row = await cursor.fetchone()
    await conn.close()

    if not row:
        raise HTTPException(status_code=401, detail="Invalid credentials")

    db_username = row[1]  # adjust index if needed
    db_password = row[2]  # adjust index if needed

    if not verify_password(form_data.password, db_password):
        raise HTTPException(status_code=401, detail="Invalid credentials")

    payload = {
        "sub": db_username,
        "exp": datetime.utcnow() + timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
    }
    token = jwt.encode(payload, SECRET_KEY, algorithm=ALGORITHM)
    return {"access_token": token, "token_type": "bearer"}

# --- Auth dependency ---
async def get_current_user(token: str = Depends(oauth2_scheme)):
    credentials_exception = HTTPException(
        status_code=status.HTTP_401_UNAUTHORIZED,
        detail="Could not validate credentials",
        headers={"WWW-Authenticate": "Bearer"},
    )
    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        username: str = payload.get("sub")
        if username is None:
            raise credentials_exception
    except JWTError:
        raise credentials_exception

    conn = await get_db_connection()
    cursor = await conn.cursor()
    await cursor.execute("SELECT * FROM users WHERE username = ?", (username,))
    user = await cursor.fetchone()
    await conn.close()

    if user is None:
        raise credentials_exception
    return user

# --- Protected route ---
@router.get("/me")
async def read_users_me(current_user: tuple = Depends(get_current_user)):
    return {"username": current_user[0]}
