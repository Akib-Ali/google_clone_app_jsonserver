import axios from "axios";
import { useEffect, useState } from "react";
import { GoogleUI } from "./googleui";
import { Box ,Text, VStack} from '@chakra-ui/react'
import { Checkbox, CheckboxGroup ,Button} from '@chakra-ui/react'
 import { useSearchParams } from "react-router-dom";

export const GoogleFetch=(props)=>{

    const [storedata,setstoredata]  = useState([])
    const [error, seterror] = useState(false)
    const [page, setpage] = useState(1)
    const [loading, setloading] = useState(false)
    const [sortname, setsortname]= useState("asc")
    const [sortvalue, setsortvalue] = useState("")
    const [fiterrating, setfilterrating] = useState(0)
    
    const [filtergender,setfiltergender] = useState("WOMEN" )

    const sortoption= ['name' , "color"]




    const [searchParams , setSearchParams] = useSearchParams()
   const [colorValues, SetcolorValues] = useState(searchParams.getAll("color") || [])

    
    

  
    



    useEffect(()=>{
         fetch()
        
        setloading(true)


    },[props.inputval,page,sortname, sortvalue, fiterrating, filtergender])


    const  fetch=(params)=>{

        axios({
             method:"get",
      url:
    `https://doctor-patient123.herokuapp.com/products/?rating_gte=${fiterrating}&&gender=${filtergender}&&_sort=name&_order=${sortname}`, params,

            

        }).then((elem)=>{
            setstoredata(elem.data)
            setloading(false)

        }).catch((err)=>{
        seterror(err)
        setloading(false)
        })

    }


    // console.log(storedata)




    const handleDelete=(id)=>{
        alert("Please confirm you want to delete this item")
        const updateddate = storedata.filter((elem,index)=>{
            return  index !== id
        })
        setstoredata(updateddate)

    }






    const handlesort=(e)=>{
      let value = e.target.value;
      setsortvalue(value)
      return  axios({
        method:"get",
        url:"https://doctor-patient123.herokuapp.com/products/",
        params:{
          _sort:`${value}`,
          _order:"asc"

        }
      })

      .then((result)=>{
        setstoredata(result.data)
      })
      .catch((err)=>{
        console.log(err)
      })

    }
   






  //   const handlefilter= async (value)=>{
  //     return await axios.get(`https://doctor-patient123.herokuapp.com/products?gender=${value}`)
  //     .then((responce)=>{
  //         setstoredata(responce.data)
  //     })
  //     .catch((err)=> console.log(err))


  // }


    










    const colorhandler=(values)=>{
      // console.log(values)
      SetcolorValues(values)
     

    }
  

    useEffect(()=>{

      if(colorValues){
        setSearchParams({color:colorValues});

        let params={
        color : searchParams.getAll("color")

        }
        
        fetch(params)

      }

    },[colorValues,searchParams,setSearchParams])


    return(
        <div>
            
              <div>
                {loading && <Text fontSize={"3xl"}>...loading </Text>}
              </div>


              <Text color={"blue"} fontSize={"3xl"}>Sorting With Simple Button Method</Text>
               <div style={{display:"flex" ,  width:"550px",border:"2px solid red", margin:"auto", marginTop:"50px" ,   gap:"30px"}}>
              
              
               <Button colorScheme={"blue"} disabled={sortname == "asc"} 
                onClick={(()=> setsortname("asc"))}>Name (a-z)
              </Button> 

             <Button colorScheme={"blue"} disabled={sortname == "desc"} 
             onClick={(()=> setsortname("desc"))}>Name (z-a)
             </Button>  

             </div>                                                   {/*sorting div  */}




             

             <div style={{marginTop:"80px" , marginBottom:"100px"}}>         {/*sorting with dropdow*/}
             <Text color={"blue"} fontSize={"3xl"}>Sorting with drop down</Text>
             
           <select 
             onChange={handlesort}
             value={sortvalue}
             >
              <option>Please choose sorting by category</option>
              {sortoption.map((item,index)=>(
                <option value={item} key={index}>{item}</option>
              ))}
             </select>

              </div>






             
             <h2>Filter By Rating</h2>

           <div style={{display:"flex" ,gap:"30px" ,height:"50px", width:"500px" , 
           border:"2px solid red" , margin:"auto" , marginTop:"50px"}}>

          <Button disabled={fiterrating==2} colorScheme={"blue"} onClick={()=> setfilterrating(2)}>Greater Than 2</Button>
          <Button  disabled={fiterrating==3}colorScheme={"blue"} onClick={()=> setfilterrating(3)}>Greater Than 3</Button>
         <Button  disabled={fiterrating==4} colorScheme={"blue"}onClick={()=> setfilterrating(4)}>Greater Than 4</Button>

        </div>                                                             {/*FILTER BY RATING  */}






                <h1>Filter Button</h1>
              
              <div style={{display:"flex" ,gap:"30px" ,height:"50px", width:"200px" , border:"2px solid red" , margin:"auto"}}>
                    
                    {/* <Button colorScheme={"red"} onClick={()=> handlefilter("MEN")}>Men</Button>
                    <Button  colorScheme={"red"}  onClick={()=> handlefilter("WOMEN")}>Women</Button> */}

                    <Button  onClick={(()=> setfiltergender("MEN"))} colorScheme={"red"}>Men</Button>
                    <Button  onClick={(()=> setfiltergender("WOMEN"))} colorScheme={"red"}>WOMEN</Button>
                </div>

           
             






            



            <Box mb="50px" border="2px solid green">

             <Text>Filter By Color</Text>
             <CheckboxGroup colorScheme='green' defaultValue={colorValues} onChange={colorhandler}>
            <VStack spacing={[1, 5]} direction={['column', 'row']}>
            <Checkbox value='AQUA BLUE'>AQUA BLUE</Checkbox>
            <Checkbox value='BURGUNDY RED'>BURGUNDY RED</Checkbox>
            <Checkbox value='NATURAL WHITE'>NATURAL WHITE</Checkbox>
            <Checkbox value='BLACK & GREY (BLACK SOLE)'>BLACK & GREY (BLACK SOLE)</Checkbox>
            <Checkbox value='BLACK & RED (BLACK SOLE)'> BLACK & RED (BLACK SOLE)</Checkbox>
            </VStack>
           </CheckboxGroup>
             

            </Box>





              {/* select box */}

            <table border="1" style={{margin:"10px"}}>
               <thead>
                <tr>
                    <th>S.No</th>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Color</th>
                    <th>Gender</th>
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