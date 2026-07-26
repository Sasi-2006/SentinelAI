from pydantic import BaseModel
from datetime import datetime



class ActivityLog(BaseModel):

    employee:str

    action:str

    files:int

    location:str

    time:str

    risk_score:int

    threat:str
    