import axios from "axios"
import { useState } from "react"

export const GoogleForm=(props)=>{


const api="https://doctor-patient123.herokuapp.com/products"

const handlesubmit=(e)=>{
    e.preventDefault()
    alert("Successfully Add item")
   
   axios.post(`${api}` , props.inputval)
   .then(()=>{
    props.setinputval( {
    id:"",
    images:"",
    name:"",
    color:"",
    gender:"",
    final_price:"",
    reviews:"",
    rating:""

 })

   })
   
}



  const handleinput=(e)=>{
    const name= e.target.name;
    const value= e.target.value;

    props.setinputval({...props.inputval, [name]: value})

  }

  // console.log(props.inputval)




    return (
        <div>
            <h3>Google Form  Post Method</h3>
            <form>

                S.No : {}
                <input placeholder="write S.no" name="id" value={props.inputval.id} onChange={handleinput} /><br></br><br></br>


                Images: {}
                <input placeholder="enter url" name="images" value={props.inputval.images} onChange={handleinput} /><br></br><br></br>



                 Name : {}
                <input placeholder="write shoes name" name="name" value={props.inputval.name} onChange={handleinput} /><br></br><br></br>

                 Color:{}
                <input placeholder="enter color" type="text" name="color" value={props.inputval.color} onChange={handleinput} />  <br></br><br></br>

                Gender: {}
                  <select name="gender" value={props.inputval.gender} onChange={handleinput}>
                    <option value="MEN">MEN</option>
                    <option value="WOMEN">WOMEN</option>
                  </select>
                 <br></br><br></br>

                Final Price:{}
                <input type="number" placeholder="Enter rating" name="final_price" value={props.inputval.final_price} onChange={handleinput} /><br></br> <br></br>


                Reveiew:{}
                <input type="number" placeholder="Enter reveiew" name="reviews" value={props.inputval.reviews} onChange={handleinput} /><br></br> <br></br>



                Rating:{}
                <select name="rating" value={props.inputval.rating} onChange={handleinput}>
                  <option value="0">0</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
                <br></br> <br></br>








                <button type="submit" onClick={handlesubmit}> Submit Form</button>


        
            </form>
        </div>
    )
}