import React from 'react';

import logo from '../img/build.png';


import "bootstrap/dist/css/bootstrap.min.css";
import Searchbox from './Searchbox';

const Home = () => {
  return (
    <div className="row-fluid box">

      <div className='container text-center p-3'>
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
  </div>
 )
}

export default Home;
