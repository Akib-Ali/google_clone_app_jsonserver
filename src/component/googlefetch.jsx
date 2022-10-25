import axios from "axios";
import { useEffect, useState } from "react";
import { GoogleUI } from "./googleui";
export const GoogleFetch=(props)=>{

    const [storedata,setstoredata]  = useState([])
    const [error, seterror] = useState(false)
    const [page, setpage] = useState(1)
    const [loading, setloading] = useState(false)
    const [sortname, setsortname]= useState("asc")
    // const [sortgender,setsortgender] = useState("desc")
    const [sortvalue, setsortvalue] = useState("")
    const [fiterrating, setfilterrating] = useState(0)

    const sortoption= ['name' , "gender"]
    

    //  const [filter, setfilter] = useState("")
    



    useEffect(()=>{
        fetch()
        setloading(true)

    },[props.inputval,page,sortname, sortvalue, fiterrating])


    const  fetch=()=>{

        axios({
             method:"get",
             url:"https://doctor-patient123.herokuapp.com/products",

             params:{
                _page:page,
                _limit:15,
                _sort:"name, gender",
                _order:`${sortname}`,
                rating_gte:fiterrating
                

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



    const handleSort= async (e)=>{
        let value = e.target.value;
        setsortvalue(value)
 
        //  return await axios.get(`https://doctor-patient123.herokuapp.com/products/?_sort=${value}&_order=asc`)
        return await axios({
            method :"get",
            url:"https://doctor-patient123.herokuapp.com/products/",
            params:{
                _sort:`${value}`,
                _order:"asc",
                

            }
        })
         .then((res)=>{
          setstoredata(res.data)
         })
         .catch((err)=>{
            console.log(err)

         })

    
    }


    const handlefilter= async (value)=>{
        return await axios.get(`https://doctor-patient123.herokuapp.com/products?gender=${value}`)
        .then((responce)=>{
            setstoredata(responce.data)
        })
        .catch((err)=> console.log(err))


    }


    return(
        <div>
            
              <div>
                {loading && <h1>...loading </h1>}
              </div>


              <div style={{display:"flex" ,  width:"350px",border:"2px solid red", margin:"auto", marginTop:"50px" , gap:"30px"}}>
                 <button disabled={sortname == "asc"} onClick={(()=> setsortname("asc"))}>Name (a-z)</button> 
                <button disabled={sortname == "desc"} onClick={(()=> setsortname("desc"))}>Name (z-a)</button>  
                <button>Gender (a-z)</button> 
                <button>Gender(z-a)</button>  







              </div>                                                   {/*sorting div  */}

                <h1>Filter Button</h1>
              
              <div style={{display:"flex" ,gap:"30px" ,height:"50px", width:"200px" , border:"2px solid red" , margin:"auto"}}>
                    
                    <button style={{width:"80px"}} onClick={()=> handlefilter("MEN")}>Men</button>
                    <button style={{width:"80px"}}  onClick={()=> handlefilter("WOMEN")}>Women</button>
                </div>

           
             
                  <h2>Filter By Rating</h2>

                <div style={{display:"flex" ,gap:"30px" ,height:"50px", width:"300px" , 
                border:"2px solid red" , margin:"auto" , marginTop:"50px"}}>

                <button onClick={()=> setfilterrating(2)}>Greater Than 2</button>
                <button onClick={()=> setfilterrating(3)}>Greater Than 3</button>
                <button onClick={()=> setfilterrating(4)}>Greater Than 4</button>

                </div>








              <div style={{marginTop:"80px" , marginBottom:"100px"}}>
             
             <select
             onChange={handleSort}
             value={sortvalue}
              >
             <option>Please Selectvalue</option>
            
             {sortoption.map((item,index)=>(
                <option value={item} key={index}>{item}</option>
             ))}
            
             </select>

              </div>

              {/* select box */}

            <table border="1" style={{margin:"10px"}}>
               <thead>
                <tr>
                    <th>S.No</th>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Color</th>
                    <th>Gender</th>
                    <th>RATING</th>
                    <th>Final Price</th>
                    <th>Reveiew</th>
                    <th>Rating</th>
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