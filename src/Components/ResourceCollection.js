import { useState } from "react";
import Location from "./Location";

function ResourceCollection() {
    const [time,setTime]=useState(false);
    return ( 
        <>  
            <div className="collection-div">          
            {
                time?<><Location /><button onClick={()=>setTime(!time)}>Close</button></> :<button onClick={()=>setTime(!time)}>Display World Clock</button>
            }   
            </div>
        </>
     );
}

export default ResourceCollection;