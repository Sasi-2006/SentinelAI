import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

import DashboardCards from "./components/DashboardCards";
import EmployeeTable from "./components/EmployeeTable";
import AlertTable from "./components/AlertTable";
import RiskMeter from "./components/RiskMeter";
import ActivityChart from "./components/ActivityChart";


function App(){


return(

<>

<Navbar/>

<Sidebar/>


<div className="dashboard">


<DashboardCards/>


<RiskMeter/>


<EmployeeTable/>


<ActivityChart/>


<AlertTable/>


</div>


</>

)

}


export default App;