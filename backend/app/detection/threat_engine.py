def analyze_activity(activity):


    risk = 0


    # Large downloads

    if activity["files"] > 300:
        risk += 40



    # External access

    if activity["location"] == "external":
        risk += 30



    # Suspicious time

    hour = int(activity["time"].split(":")[0])

    if hour < 6:
        risk += 20



    # Failed login

    if activity["action"] == "login_failed":
        risk += 20



    if risk >= 70:
        threat="HIGH"

    elif risk >=40:
        threat="MEDIUM"

    else:
        threat="LOW"



    return {

        "risk_score":risk,
        "threat":threat

    }