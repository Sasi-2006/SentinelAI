import pandas as pd

from sklearn.ensemble import RandomForestRegressor

import joblib



# Load dataset

data = pd.read_csv(
    "../dataset/employee_behavior.csv"
)



# Features

X = data[
[
"login_count",
"failed_logins",
"files_accessed",
"downloads",
"external_access"
]
]


# Target

y = data["risk_score"]



# Create model

model = RandomForestRegressor(
    n_estimators=100,
    random_state=42
)



# Train

model.fit(X,y)



# Save model

joblib.dump(
    model,
    "risk_model.pkl"
)



print("AI Risk Model Trained Successfully")