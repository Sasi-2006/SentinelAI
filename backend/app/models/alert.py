from pydantic import BaseModel


class Alert(BaseModel):

    employee:str

    message:str

    risk_score:int

    threat:str