import axios from "axios";
import { useEffect, useState } from "react";
import { GoogleUI } from "./googleui";
export const GoogleFetch=(props)=>{

    const [storedata,setstoredata]  = useState([])
    const [error, seterror] = useState(false)
    const [page, setpage] = useState(1)
    const [loading, setloading] = useState(false)



    useEffect(()=>{
        fetch()
        setloading(true)

    },[props.inputval,page])


    const  fetch=()=>{

        axios({
             method:"get",
             url:"https://doctor-patient123.herokuapp.com/users",

             params:{
                _page:page,
                _limit:5
             }


        }).then((elem)=>{
            setstoredata(elem.data)
            setloading(false)

        }).catch((err)=>{
        seterror(err)
        setloading(false)
        })

    }


    console.log(storedata)




    const handleDelete=(id)=>{
        alert("Please confirm you want to delete this item")
        const updateddate = storedata.filter((elem,index)=>{
            return  index !== id
        })
        setstoredata(updateddate)

    }


    return(
        <div>
            
              <div>
                {loading && <h1>...loading </h1>}
              </div>

            <table border="1" style={{margin:"10px"}}>
               <thead>
                <tr>
                    <th>S.No</th>
                    <th>TITLE</th>
                    <th>Date</th>
                    <th>DESCRIPTION</th>
                    <th>RATING</th>
                    <th>Temprary Delete</th>
                    <th>DELETE NOTES</th>
                </tr>
               </thead>

               {storedata.map((elem,index)=>{
                return(
                    <GoogleUI
                        key={index}
                        index={index}
                        id={index}
                        elem={elem}
                        handleDelete= {handleDelete}
                    />
                )
               })}

               

            
            </table>

            <div style={{display:"flex" ,gap:"40px" , width:"200px", margin:"auto", border:"2px solid red"}}>
                <button  disabled={page==1} onClick={(()=> setpage(page-1))}>prev</button>
                <button disabled={page.length-1} onClick={(()=> setpage(page+1))}>next</button>
            </div>
        </div>
    )
}