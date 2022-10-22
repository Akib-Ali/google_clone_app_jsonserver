import axios from "axios"
import { useState } from "react"

export const GoogleForm=(props)=>{

//   const [inputval,setinputval] = useState({
//     title_note:"",
//     date:"",
//     decription:"",
//     rating:"",
// })

const api="https://doctor-patient123.herokuapp.com/users"

const handlesubmit=(e)=>{
    e.preventDefault()
   
   axios.post(`${api}` , props.inputval)
   .then(()=>{
    props.setinputval( {
   title_note:"",
    date:"",
    decription:"",
    rating:"",



    })

   })
   



}



  const handleinput=(e)=>{
    const name= e.target.name;
    const value= e.target.value;

    props.setinputval({...props.inputval, [name]: value})

  }

  console.log(props.inputval)




    return (
        <div>
            <h3>Google Form  Post Method</h3>
            <form>
                 Title : {}
                <input placeholder="write Title" name="title_note" value={props.inputval.title_note} onChange={handleinput} /><br></br><br></br>

                 Date:{}
                <input type="date" name="date" value={props.inputval.date} onChange={handleinput} />  <br></br><br></br>

                Description: {}
                <input type="text" placeholder="write Description" name="decription" value={props.inputval.decription} onChange={handleinput} /> <br></br><br></br>

                Rating:{}
                <input type="number" placeholder="Enter rating" name="rating" value={props.inputval.rating} onChange={handleinput} /><br></br> <br></br>


                <button type="submit" onClick={handlesubmit}> Submit Form</button>


        
            </form>
        </div>
    )
}