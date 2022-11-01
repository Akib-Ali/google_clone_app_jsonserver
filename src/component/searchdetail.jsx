import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Box ,Image,Text} from "@chakra-ui/react"

export const SearchDetail=()=>{

     const [data,setdata]= useState([])
    const {id} = useParams()


    useEffect(()=>{
        fetch()

    },[])

    const fetch=()=>{
        axios({
            method:"get",
            url:`https://doctor-patient123.herokuapp.com/products/${id}`
        }).then((res)=>{
            setdata(res.data)
        }).catch((err)=>{
            console.log(err)
        })
    }

    console.log(data)


    return(
        <Box height={"400px"} border="2px solid red" mt="100px">
            <Text> Search Detail Page {id}</Text>

             <Image src={data.images}/> 
             <Text>{data.name}</Text>
             <Text>{data.color}</Text>
             <Text>{data.gender}</Text>
             <Text>{` Rs : ${data.original_price}`}</Text>

             <Text>{`Rating : ${data.rating}`}</Text>

          </Box>


        
    )


}