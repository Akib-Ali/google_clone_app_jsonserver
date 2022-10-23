import axios from "axios";
import { useEffect, useState } from "react";
import { GoogleUI } from "./googleui";
export const GoogleFetch=(props)=>{

    const [storedata,setstoredata]  = useState([])
    const [error, seterror] = useState(false)



    useEffect(()=>{
        fetch()

    },[props.inputval])


    const  fetch=()=>{

        axios({
             method:"get",
             url:"https://doctor-patient123.herokuapp.com/users"

        }).then((elem)=>{
            setstoredata(elem.data)

        }).catch((err)=>{
        seterror(err)
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
            
            <table border="1" style={{margin:"10px"}}>
               <thead>
                <tr>
                    <th>S.No</th>
                    <th>TITLE</th>
                    <th>Date</th>
                    <th>DESCRIPTION</th>
                    <th>RATING</th>
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
        </div>
    )
}