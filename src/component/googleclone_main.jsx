import { GoogleFetch } from "./googlefetch"
import { GoogleForm } from "./googleform"
// import { GoogleUIFetch } from "./googleui"
import { useEffect, useState } from "react";

export const GoogleMain=()=>{


    const [inputval,setinputval] = useState({
        id:"",
        images:"",
        color:"",
        gender:"",
        final_price:"",
        reviews:"",
        rating:""
    })



    
    

    return(
        <div>
            <h1>Google Clone App Using Api Json Server</h1>
            <GoogleForm 
                inputval={inputval}
                setinputval={setinputval}
            />
            <GoogleFetch
                inputval={inputval}
                setinputval={setinputval}
            />
        </div>
    )
}