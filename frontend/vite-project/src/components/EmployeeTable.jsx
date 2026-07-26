import { useEffect, useState } from "react";
import axios from "axios";


function EmployeeTable(){

    const [employees,setEmployees] = useState([]);
    const [loading,setLoading] = useState(true);


    useEffect(()=>{

        axios.get("http://127.0.0.1:8000/employees")
        .then(res=>{

            const data = res.data.map(emp=>({

                ...emp,

                loginRisk:
                emp.login_count > 100
                ?
                "High"
                :
                emp.login_count > 50
                ?
                "Medium"
                :
                "Low"

            }));

            setEmployees(data);
            setLoading(false);

        })
        .catch(err=>{
            console.log(err);
            setLoading(false);
        })


    },[])



    if(loading){
        return <h3>Loading Employees...</h3>
    }



return(

<div>

<h2>Employees</h2>


<table border="1" width="100%">

<thead>

<tr>

<th>Name</th>

<th>Department</th>

<th>Role</th>

<th>Login Risk</th>

<th>ML Risk Score</th>

</tr>

</thead>



<tbody>


{
employees.map(emp=>(

<tr key={emp._id}>


<td>
{emp.name}
</td>


<td>
{emp.department}
</td>


<td>
{emp.role}
</td>


<td>

{
emp.loginRisk
}

</td>



<td>

{
emp.risk_score
?
emp.risk_score
:
"Run Analysis"
}

</td>



</tr>


))
}


</tbody>


</table>


</div>


)


}


export default EmployeeTable;