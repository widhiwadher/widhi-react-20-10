import React from 'react';

import logo from '../img/build.png';


import "bootstrap/dist/css/bootstrap.min.css";
import Searchbox from './Searchbox';
import Cities from "./Cities";


const Home = () => {
  return (
    <div className="row-fluid box">

      <div className=' col-lg-10 col-md-10 col-sm-10 text-center p-3'>
        <h2 className="pt-5 ">
          Build Your Dream Space With <strong>BuildEasy</strong>
        </h2>
        <h5 className="pt-4 ">
          We are the team of experienced builders for building your customised dream space.
            </h5>
      </div> 
    <div className="container">
     
      <Searchbox/>
      </div>

      <Cities/>
  </div>
 )
}

export default Home;
