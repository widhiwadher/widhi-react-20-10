import React from 'react'
import Button from 'react-bootstrap/Button'

const Country = [{
  name : "India ", 
  State : [{ name : "Odisha" , cities :["Rourkela",'Bhubaneswar', 'Sambalpur','Cuttack','Jharsuguda',] }],
  State : [{ name : "Karnataka" , cities :["Bangalore",'Mysuru', 'Mangalore','Madikeri','Bellure',] }]
}]



const Cities = () => {

  return (
    <div className = 'container'>

    <label className = "p-2" >Country</label>
    <input type = 'text' placeholder = "--select country--" ></input>


    <label className = "p-2" >State</label>
    <input type = 'text'   placeholder = "--select state--"></input>


    <label className = "p-2" >City</label>
    <input type = 'text' placeholder = "--select city--"></input>

    <Button variant="outline-success ">Searchbox</Button>{' '}


    </div>
   
  )
}

export default Cities
