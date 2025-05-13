from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker, Session

# ✅ IMPORTANT: Use "trusted_connection" OR specify driver & encode special characters
DATABASE_URL = (
    "mssql+pyodbc://imsadmin:imsadmin@DESKTOP-FH6B6B4\\SQLEXPRESS/OOS"
    "?driver=ODBC+Driver+17+for+SQL+Server"
    "&TrustServerCertificate=yes"
)

# ✅ Add echo=True for debugging SQL queries (optional)
engine = create_engine(DATABASE_URL, echo=True)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base = declarative_base()

# Dependency
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()
