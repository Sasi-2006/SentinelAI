import joblib
import numpy as np
import os


BASE_DIR = os.path.dirname(os.path.abspath(__file__))

MODEL_PATH = os.path.join(
    BASE_DIR,
    "risk_model.pkl"
)

model = joblib.load(MODEL_PATH)


def predict_risk(
    login_count,
    failed_logins,
    files_accessed,
    downloads,
    external_access
):

    data = np.array([[
        login_count,
        failed_logins,
        files_accessed,
        downloads,
        external_access
    ]])


    prediction = model.predict(data)


    return round(float(prediction[0]),2)