import asyncio
from app.database import employees_collection


employees = [
    {
        "name":"John Smith",
        "department":"Finance",
        "role":"Analyst",
        "login_count":70,
        "failed_logins":8,
        "files_accessed":300,
        "downloads":50,
        "external_access":1
    },
    {
        "name":"Alice Brown",
        "department":"HR",
        "role":"Manager",
        "login_count":30,
        "failed_logins":1,
        "files_accessed":80,
        "downloads":5,
        "external_access":0
    }
]


async def seed():

    await employees_collection.delete_many({})

    await employees_collection.insert_many(employees)

    print("Employees inserted")


asyncio.run(seed())