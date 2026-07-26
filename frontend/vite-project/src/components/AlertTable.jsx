import { useEffect, useState } from "react";
import api from "../services/api";
import "../styles/AlertTable.css";


function AlertTable() {

    const [alerts, setAlerts] = useState([]);


    useEffect(() => {

        api.get("/alerts")
            .then((res) => {

                setAlerts(
                    res.data.slice(-6).reverse()
                );

            })
            .catch((err) => {

                console.error("Alert API Error:", err);

            });


    }, []);



    return (

        <div>

            <h2>
                🚨 Threat Alerts
            </h2>


            <div className="alert-container">


                {
                    alerts.map((alert, index) => (


                        <div
                            key={alert._id || index}
                            className={`alert-card ${
                                alert.severity
                                    ? alert.severity.toLowerCase()
                                    : ""
                            }`}
                        >


                            <h3>
                                🚨 {alert.employee || alert.employee_name}
                            </h3>



                            <p>
                                Risk Score:
                                <b>
                                    {alert.risk_score || "N/A"}
                                </b>
                            </p>



                            <p>
                                {alert.message}
                            </p>



                            <p>
                                Severity:
                                <b>
                                    {alert.severity || "Unknown"}
                                </b>
                            </p>


                        </div>


                    ))

                }


            </div>


        </div>

    );

}


export default AlertTable;