import { Route, Routes } from "react-router-dom"
import { GoogleMain } from "./googleclone_main"
import { Navbar } from "./Navbar"
import { Serach } from "./search"
import { SearchDetail } from "./searchdetail"

export const AllRoutes=()=>{


    return(
     <> 
       <Navbar/>
        <Routes>
            <Route path="/" element={<GoogleMain/>}/>
            <Route path="/search" element={<Serach/>}/>
            <Route path="/search/:id"   element={<SearchDetail/>}/>
        </Routes>
        </>
    )
}