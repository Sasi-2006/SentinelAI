import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import ThreatCard from "../components/ThreatCard";
import ActivityChart from "../components/ActivityChart";
import RiskMeter from "../components/RiskMeter";
import EmployeeTable from "../components/EmployeeTable";
import AlertTable from "../components/AlertTable";
function Dashboard(){

    return(

        <>

        <Navbar/>


        <div className="main-layout">


            <Sidebar/>


            <div className="dashboard-content">


                <h1>
                    Dashboard Overview
                </h1>


                <div className="cards-container">


                    <ThreatCard
                    title="Total Employees"
                    value="250"
                    icon="👥"
                    />


                    <ThreatCard
                    title="High Risk Users"
                    value="7"
                    icon="⚠️"
                    />


                    <ThreatCard
                    title="Active Alerts"
                    value="15"
                    icon="🚨"
                    />


                    <ThreatCard
                    title="Risk Score"
                    value="82%"
                    icon="🛡️"
                    />


                </div>

                <div className="analytics-section">

                    <ActivityChart/>

                    <RiskMeter/>

                </div>
                <EmployeeTable/>

                <AlertTable/>

            </div>


        </div>

        </>

    )

}


export default Dashboard;