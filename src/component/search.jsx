import { Text,Box,Image ,Grid,Input, Button} from "@chakra-ui/react"
import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
export const Serach=()=>{

    const [data,setdata]= useState([])
    const [searchinput,setsearchinput] = useState("")
    



    useEffect(()=>{
      fetch()
    },[setsearchinput])


    const fetch=(params)=>{

         axios({
            method:"get",
            url:"https://doctor-patient123.herokuapp.com/products/",params
         })
         .then((res)=>{
            setdata(res.data)

         })
         .catch((err)=>{
            console.log(err)

         })
        

    }

    console.log(data)

    



      const handleSearch=(e)=>{
        e.preventDefault()
        
         

           let params={
                q:`${searchinput}`
            }

            fetch(params)
        
        setsearchinput("")




      }



    return(
       <Box>
        <Text fontSize={"3xl"} color="blue" fontWeight={"600"}>Search Method</Text>

        <Box>
            <Text></Text>
            <form>
            
           <Input
            placeholder="Search Item"
            value={searchinput}
            onChange={((e)=> setsearchinput(e.target.value))}
           />
             <Button type="submit"  colorScheme={"blue"} mt="30px" w="10%" onClick={handleSearch}>Search</Button> 
             
            </form>

            <Button colorScheme={"yellow"}   w="10%" mt="15px" onClick={fetch}>Reset</Button>
        </Box>

      

         {data.length == 0 ? <Text fontSize={"3xl"} color="pink" mt={"20px"}>NO DATA FOUND</Text>  : 

        <Grid templateColumns='repeat(4, 1fr)' gap={6}>
          {data.map((elem,index)=>{
            return (
                <Link to={`/search/${elem.id}`}>
                <Box h={"300px"} w={"300px"} border="2px solid grey" key={index}> 
                <Image src={elem.images}/>
                <Text>{elem.name}</Text> 
                <Text>{elem.color}</Text>
                <Text>{elem.gender}</Text>
                  
                
                </Box>
                </Link>
            )
        })}
     
    </Grid>
  }
       </Box>
    )
}