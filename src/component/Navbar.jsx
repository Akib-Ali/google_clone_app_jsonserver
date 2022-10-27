import { Link } from "react-router-dom"

export const Navbar=()=>{

    return(
       <nav style={{display:"flex" , backgroundColor:"grey", color:"white", gap:"80px" ,width:"100%"}}>
        <Link to="/">Home</Link>
        <Link to="/men">Men</Link>
       </nav>
    )
}