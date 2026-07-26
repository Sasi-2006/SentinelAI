from fastapi import APIRouter
from pydantic import BaseModel

from app.ml.predict import predict_risk


router = APIRouter()



class RiskInput(BaseModel):

    login_count:int
    failed_logins:int
    files_accessed:int
    downloads:int
    external_access:int



@router.post("/predict-risk")
def predict(data:RiskInput):


    score = predict_risk(
        data.login_count,
        data.failed_logins,
        data.files_accessed,
        data.downloads,
        data.external_access
    )


    if score >= 70:
        threat="HIGH"

    elif score >=40:
        threat="MEDIUM"

    else:
        threat="LOW"



    return {

        "risk_score":score,
        "threat":threat

    }