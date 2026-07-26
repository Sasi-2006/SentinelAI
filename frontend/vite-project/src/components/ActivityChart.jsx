import "../styles/ActivityChart.css";
import {
LineChart,
Line,
XAxis,
YAxis,
Tooltip
}
from "recharts";

function ActivityChart(){

return(

<div className="chart-card">

<h2>📊 Employee Activity</h2>


<div>
Mon
<div className="chart-bar" style={{width:"40%"}}></div>
</div>


<div>
Tue
<div className="chart-bar" style={{width:"70%"}}></div>
</div>


<div>
Wed
<div className="chart-bar" style={{width:"90%"}}></div>
</div>


<div>
Thu
<div className="chart-bar" style={{width:"60%"}}></div>
</div>


</div>

)

}

export default ActivityChart;