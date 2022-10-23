import { useState } from "react"

export const GoogleUI=(props)=>{

    const [strike, setstrike] = useState(false)


    const temphandledelete=()=>{
        setstrike(true)

    }

    return (
        
            <tbody>
                <tr style={{ textDecorationColor:"red",textDecoration: strike ? "line-through" : "none"}}>
                    <td>{props.id}</td>
                    <td>{props.elem.title_note}</td>
                    <td>{props.elem.date}</td>
                    <td>{props.elem.decription}</td>
                    <td>{props.elem.rating}</td>
                    <td><button onClick={temphandledelete}>Temprarory Delete</button></td>
                    <td><button onClick={(()=> props.handleDelete(props.index))}>Delete Note</button></td>
                </tr>
            </tbody>
    
    )
}