import React from 'react'
import Button from 'react-bootstrap/Button'

const Country = [{
  name: "India ",
  State: [{ name: "Odisha", cities: ["Rourkela", 'Bhubaneswar', 'Sambalpur', 'Cuttack', 'Jharsuguda',] }],
  State: [{ name: "Karnataka", cities: ["Bangalore", 'Mysuru', 'Mangalore', 'Madikeri', 'Bellure',] }]
}]



const Cities = () => {

  return (
    <div className='container'>
    <label className="p-2" >Country</label>
      <select>
        <option value="" selected disabled>--Select country--</option>
        <option value="">India</option>
      
      </select>


      <label className="p-2" >State</label>
      <select>
        <option value="" selected disabled>--Select city--</option>
        <option value="">A</option>
        
      </select>


      <label className="p-2" >City</label>
      <input type='text' placeholder="--select city--"></input>

      <Button variant="outline-success p-2 ">Searchbox</Button>{' '}
      <button className="btn btn-success"><span>+</span></button>
      <input placeholder="0" value="0" ></input>
      <button className="btn btn-primary"><span>-</span></button>
    </div>

  )
}

export default Cities
