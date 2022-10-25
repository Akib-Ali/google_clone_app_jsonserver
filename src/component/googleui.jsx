import { useState } from "react"

export const GoogleUI=(props)=>{

    const [strike, setstrike] = useState(false)


    const temphandledelete=()=>{
        setstrike(true)

    }

    return (
             <>
            <tbody>
                <tr style={{ textDecorationColor:"red",textDecoration: strike ? "line-through" : "none"}}>

                    <td>{props.id}</td>
                    <td>
                    <img src={props.elem.images[0]} height="90px" width="90px"/>
                    
                    </td>
                    <td>{props.elem.name}</td>
                    <td>{props.elem.color}</td>
                    <td>{props.elem.gender}</td>
                    <td>{props.elem.rating}</td>
                    <td>{props.elem.final_price}</td>
                    <td>{props.elem.reviews}</td>
                    <td>{props.elem.rating}</td>
                    <td><button onClick={temphandledelete}>Temprarory Delete</button></td>
                    <td><button onClick={(()=> props.handleDelete(props.index))}>Delete Note</button></td>
                </tr>
        
            </tbody>

        
            </>
    
    )
}