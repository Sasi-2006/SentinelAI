from fastapi import APIRouter
from app.database import database


router = APIRouter()


alerts_collection = database["alerts"]


@router.get("/alerts")
def get_alerts():

    alerts = []

    cursor = alerts_collection.find({})


    for alert in cursor:

        alert["_id"] = str(alert["_id"])

        alerts.append(alert)


    return alerts