from app.database import alerts_collection


async def create_alert(employee, risk_score):

    if risk_score >= 70:
        severity = "HIGH"

    elif risk_score >= 40:
        severity = "MEDIUM"

    else:
        severity = "LOW"


    message = f"{severity} risk behavior detected"


    alert = {
        "employee": employee["name"],
        "email": employee.get(
            "email",
            "unknown@company.com"
        ),
        "risk_score": float(risk_score),
        "severity": severity,
        "message": message
    }


    result = await alerts_collection.insert_one(alert)


    alert["_id"] = str(result.inserted_id)


    return alert