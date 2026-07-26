from fastapi import APIRouter
from app.database import employees_collection, alerts_collection


router = APIRouter()


@router.get("/employees")
async def get_employees():

    employees=[]

    cursor = employees_collection.find()

    async for emp in cursor:


        alert = await alerts_collection.find_one(
            {
                "employee":emp["name"]
            },
            sort=[
                ("risk_score",-1)
            ]
        )


        emp["_id"]=str(emp["_id"])


        if alert:
            emp["risk_score"]=alert.get(
                "risk_score",
                "N/A"
            )

        else:
            emp["risk_score"]="N/A"



        employees.append(emp)


    return employees