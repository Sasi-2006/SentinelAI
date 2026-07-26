from app.database import employees_collection
from app.ml.predict import predict_risk
from app.ml.alert_generator import create_alert


async def analyze_employee_risk():

    results=[]

    cursor = employees_collection.find()


    async for employee in cursor:

        score = predict_risk(

            employee.get("login_count",0),
            employee.get("failed_logins",0),
            employee.get("files_accessed",0),
            employee.get("downloads",0),
            employee.get("external_access",0)

        )


        alert = await create_alert(
            employee,
            score
        )


        results.append(alert)


    return results