import {useEffect,useState} from "react";
import axios from "axios";
import "../styles/AlertTable.css";


function AlertTable(){

const [alerts,setAlerts]=useState([]);


useEffect(()=>{

axios.get("http://127.0.0.1:8000/alerts")
.then(res=>{

setAlerts(res.data.slice(-6).reverse())

})

},[])



return(

<div>

<h2>🚨 Threat Alerts</h2>


<div className="alert-container">


{
alerts.map((alert,index)=>(


<div 
key={alert._id || index}
className={`alert-card ${alert.severity.toLowerCase()}`}
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
{alert.severity}
</b>

</p>


</div>


))

}


</div>


</div>


)

}


export default AlertTable;