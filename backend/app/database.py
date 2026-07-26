from motor.motor_asyncio import AsyncIOMotorClient
from dotenv import load_dotenv
import os

load_dotenv()

MONGO_URL = os.getenv("MONGO_URL")


client = AsyncIOMotorClient(
    MONGO_URL,
    tls=True,
    tlsAllowInvalidCertificates=True,
    serverSelectionTimeoutMS=5000
)


database = client["SentinelAI"]


employees_collection = database["employees"]
alerts_collection = database["alerts"]
activity_collection = database["activity_logs"]


async def test_connection():
    try:
        result = await client.admin.command("ping")
        print("MongoDB Connected Successfully:", result)

    except Exception as e:
        print("MongoDB Error:")
        print(e)