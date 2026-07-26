from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.routes import employees, activity, alerts, risk, ml
from app.database import test_connection


app = FastAPI(
    title="SentinelAI API",
    description="Autonomous Insider Threat Hunter Backend",
    version="1.0"
)


app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "https://sentinelai-dashboard-p5rttm3to-sasivarna9119-8966s-projects.vercel.app",
        "http://localhost:5173"
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def home():
    return {
        "message":"SentinelAI Backend Running 🚀"
    }


@app.get("/dashboard")
def dashboard():
    return {
        "total_employees":250,
        "high_risk_users":7,
        "active_alerts":15,
        "logs_analyzed":5420,
        "risk_score":82
    }
@app.get("/stats")
def stats():

    return {

        "total_employees":250,

        "high_risk_users":7,

        "active_alerts":15,

        "logs_analyzed":5420

    }

# Routes
app.include_router(employees.router)
app.include_router(activity.router)
app.include_router(alerts.router)
app.include_router(risk.router)
app.include_router(ml.router)



@app.on_event("startup")
async def startup_event():
    await test_connection()