from fastapi import APIRouter
from app.ml.analyzer import analyze_employee_risk

router = APIRouter()


@router.get("/run-analysis")
async def run_analysis():

    result = await analyze_employee_risk()

    return result