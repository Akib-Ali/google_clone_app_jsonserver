import axios from "axios";
import { useEffect, useState } from "react";
import { GoogleUI } from "./googleui";
export const GoogleFetch=(props)=>{

    const [storedata,setstoredata]  = useState([])
    const [error, seterror] = useState(false)
    const [page, setpage] = useState(1)
    const [loading, setloading] = useState(false)
    const [sorttitle, setsorttitle]= useState("asc")
    const [datesort, setdatesort] = useState("asc")
    const [sortdescription, setsortdescription] = useState("asc")



    useEffect(()=>{
        fetch()
        setloading(true)

    },[props.inputval,page, sorttitle, datesort, sortdescription])


    const  fetch=()=>{

        axios({
             method:"get",
             url:"https://doctor-patient123.herokuapp.com/users",

             params:{
                _page:page,
                _limit:5,
                _sort:"title_note,date,decription",
                _order:`${sorttitle}, ${datesort} , ${sortdescription}`

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



    const handlesorting=()=>{

        setsorttitle("desc")
        setdatesort("desc")
        setsortdescription("desc")
    }


    return(
        <div>
            
              <div>
                {loading && <h1>...loading </h1>}
              </div>


              <div style={{display:"flex" ,  width:"350px",border:"2px solid red", margin:"auto", marginTop:"50px" , gap:"30px"}}>
                {/* <button disabled={sorttitle == "asc"} onClick={(()=> setsorttitle("asc"))}>Title Ascending Order</button> 
                <button disabled={sorttitle == "desc"} onClick={(()=> setsorttitle("desc"))}>Title Descending Order</button>  */}


              </div>                                                   {/*sorting div  */}


              <div style={{marginTop:"80px"}}>
             
             <select name="cars" id="cars" onClick={handlesorting}>
             <option value="title_note">Sort By Title</option>
            <option value="date">Sort By Date</option>
            <option value="description">Sort By Description</option>
            
            </select>

              </div>

              {/* select box */}

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