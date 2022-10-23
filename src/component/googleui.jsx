export const GoogleUI=(props)=>{

    return (
        
            <tbody>
                <tr>
                    <td>{props.id}</td>
                    <td>{props.elem.title_note}</td>
                    <td>{props.elem.date}</td>
                    <td>{props.elem.decription}</td>
                    <td>{props.elem.rating}</td>
                    <td><button onClick={(()=> props.handleDelete(props.index))}>Delete Note</button></td>
                </tr>
            </tbody>
    
    )
}