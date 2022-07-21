import { useState } from "react";
import GenerateTransaction from "./GenerateTransaction";
import { useNavigate } from "react-router-dom";

function UserActions() {
    const navigate=useNavigate();
    const [purches,setPurches]=useState(false);
    // const createpurchese=()=>{
    //     setpurches(true);
    // }
    return ( 
        <>
            <div className="useraction-div">
            <h1>Generate Transaction</h1>
            </div>
            <div className="useraction-generate-div">
            {
                purches?
                    <>
                        <GenerateTransaction />
                        <button onClick={()=>setPurches(false)}>Clear</button>
                    </>:
                    <button onClick={()=>setPurches(true)}>Create Purchease</button>
            }
            <br />
            <button onClick={()=>navigate("/")}>Home Page</button>
            </div>
        </>
     );
}

export default UserActions;