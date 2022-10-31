import { Text,Box,Image ,Grid,Input, Button} from "@chakra-ui/react"
import axios from "axios"
import { useEffect, useState } from "react"
export const Serach=()=>{

    const [data,setdata]= useState([])
    const [searchinput,setsearchinput] = useState("")
    



    useEffect(()=>{
      fetch()
    },[])


    const fetch=()=>{

         axios({
            method:"get",
            url:"https://doctor-patient123.herokuapp.com/products/"
         })
         .then((res)=>{
            setdata(res.data)

         })
         .catch((err)=>{
            console.log(err)

         })
        

    }

    console.log(data)

     console.log(searchinput)



      const handleSearch=(e)=>{
        e.preventDefault()
        axios({
            method:"get",
            url:"https://doctor-patient123.herokuapp.com/products/",

            params:{
                q:`${searchinput}`
            }
        }).then((res)=>{
            setdata(res.data)
        }).catch((err)=>{
            console.log(err)
        })
        




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
        </Box>



        <Grid templateColumns='repeat(4, 1fr)' gap={6}>


        

          {data.map((elem,index)=>{
            return (

                <Box h={"300px"} w={"300px"} border="2px solid grey" key={index}> 
                <Image src={elem.images}/>
                <Text>{elem.name}</Text> 
                <Text>{elem.color}</Text>
                <Text>{elem.gender}</Text>
                  
                
                </Box>
            )
        })}
     

        

       
        </Grid>
       </Box>
    )
}