import { useState } from "react";
import api from "../services/api";


function ThreatScanner(){

    const [data,setData] = useState({

        login_count:"",
        failed_logins:"",
        files_accessed:"",
        downloads:"",
        external_access:""

    });


    const [result,setResult] = useState(null);



    function handleChange(e){

        setData({

            ...data,

            [e.target.name]: e.target.value

        })

    }



    async function analyzeThreat(){


        try{

            const response = await api.post(
                "/predict-risk",
                {

                    login_count:Number(data.login_count),

                    failed_logins:Number(data.failed_logins),

                    files_accessed:Number(data.files_accessed),

                    downloads:Number(data.downloads),

                    external_access:Number(data.external_access)

                }
            );


            setResult(response.data);


        }

        catch(error){

            console.log(error);

        }

    }



return(

<div className="scanner">


<h2>
🤖 AI Threat Scanner
</h2>



<input
name="login_count"
placeholder="Login Count"
onChange={handleChange}
/>


<input
name="failed_logins"
placeholder="Failed Logins"
onChange={handleChange}
/>



<input
name="files_accessed"
placeholder="Files Accessed"
onChange={handleChange}
/>



<input
name="downloads"
placeholder="Downloads"
onChange={handleChange}
/>



<input
name="external_access"
placeholder="External Access (0/1)"
onChange={handleChange}
/>



<button onClick={analyzeThreat}>
Analyze Risk
</button>



{
result &&

<div className="result">


<h3>
Risk Score: {result.risk_score}
</h3>


<h3>
Threat Level: {result.threat}
</h3>


</div>

}



</div>


)

}


export default ThreatScanner;