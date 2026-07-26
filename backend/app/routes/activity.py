from fastapi import APIRouter
from app.database import alerts_collection
from bson import ObjectId


router = APIRouter()


@router.get("/alerts")
async def get_alerts():

    alerts = []

    cursor = alerts_collection.find()

    async for alert in cursor:

        alert["_id"] = str(alert["_id"])

        alerts.append(alert)

    return alerts