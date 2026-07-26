import { useEffect, useState } from "react";
import api from "../services/api";


function EmployeeTable() {

    const [employees, setEmployees] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {

        api.get("/employees")
            .then((res) => {

                const data = res.data.map((emp) => ({

                    ...emp,

                    loginRisk:
                        emp.login_count > 100
                            ? "High"
                            : emp.login_count > 50
                                ? "Medium"
                                : "Low"

                }));


                setEmployees(data);
                setLoading(false);

            })
            .catch((err) => {

                console.error("Employee API Error:", err);
                setLoading(false);

            });


    }, []);



    if (loading) {

        return (
            <h3>
                Loading Employees...
            </h3>
        );

    }



    return (

        <div className="employee-container">

            <h2>
                👥 Employees
            </h2>


            {
                employees.length === 0 ?

                (
                    <p>
                        No employee data available
                    </p>
                )

                :

                (

                <table border="1" width="100%">

                    <thead>

                        <tr>

                            <th>Name</th>

                            <th>Department</th>

                            <th>Role</th>

                            <th>Login Risk</th>

                            <th>ML Risk Score</th>

                            <th>Status</th>

                        </tr>

                    </thead>


                    <tbody>


                    {
                        employees.map((emp) => (

                            <tr key={emp._id || emp.id}>


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
                                        emp.risk_score !== undefined
                                            ?
                                            emp.risk_score
                                            :
                                            "Not Analysed"
                                    }

                                </td>


                                <td>

                                    {
                                        emp.status
                                            ?
                                            emp.status
                                            :
                                            "Normal"
                                    }

                                </td>


                            </tr>

                        ))

                    }


                    </tbody>


                </table>

                )

            }


        </div>

    );

}


export default EmployeeTable;