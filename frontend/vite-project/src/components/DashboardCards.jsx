import {useEffect,useState} from "react";
import axios from "axios";

function DashboardCards(){

return(

<div style={{
display:"flex",
gap:"20px"
}}>


<div className="card">
<h3>Total Employees</h3>
<h1>250</h1>
</div>


<div className="card">
<h3>High Risk Users</h3>
<h1>7</h1>
</div>


<div className="card">
<h3>Active Alerts</h3>
<h1>15</h1>
</div>


<div className="card">
<h3>Logs Analysed</h3>
<h1>5420</h1>
</div>


</div>

)

}

export default DashboardCards;