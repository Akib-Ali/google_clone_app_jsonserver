import { Route, Routes } from "react-router-dom"
import { GoogleMain } from "./googleclone_main"
import { Navbar } from "./Navbar"

export const AllRoutes=()=>{


    return(
     <> 
       <Navbar/>
        <Routes>
            <Route path="/" element={<GoogleMain/>}/>
        </Routes>
        </>
    )
}