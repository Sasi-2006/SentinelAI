import asyncio
from motor.motor_asyncio import AsyncIOMotorClient
from dotenv import load_dotenv
import os
import certifi

load_dotenv()

url = os.getenv("MONGO_URL")

print("Mongo URL:", url)


client = AsyncIOMotorClient(
    url,
    tls=True,
    tlsCAFile=certifi.where(),
    serverSelectionTimeoutMS=10000
)


async def main():

    try:
        await client.admin.command("ping")
        print("MongoDB Connected Successfully")

    except Exception as e:
        print("MongoDB Error:")
        print(e)


asyncio.run(main())