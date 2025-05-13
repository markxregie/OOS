from pydantic import BaseModel, EmailStr

# ✅ Schema for incoming user registration data
class UserCreate(BaseModel):
    username: str
    email: EmailStr
    password: str

# ✅ Schema for returning user data (response)
class User(BaseModel):
    id: int
    username: str
    email: EmailStr

    class Config:
        orm_mode = True
