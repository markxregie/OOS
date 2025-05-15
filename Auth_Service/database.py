import aioodbc

# database config
server = 'DESKTOP-FH6B6B4\\SQLEXPRESS'
database = 'OOS'
username = 'imsadmin'
password = 'imsadmin'
driver = 'ODBC Driver 17 for SQL Server'

# async function to get db connection
async def get_db_connection():
    dsn = (
        f"DRIVER={{{driver}}};"
        f"SERVER={server};"
        f"DATABASE={database};"
        f"UID={username};"
        f"PWD={password};"
    )
    conn = await aioodbc.connect(dsn=dsn, autocommit=True)
    return conn
