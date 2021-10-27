import React from 'react';

import logo from '../img/build.png'

const Home = () => {
  return (
    <div className="container-fluid">

      <div className='row col-10 mx-auto'>
          <div className='col-md-5 col-lg-5 pt-5 pt-lg-0 order-2'>
         
            <h2 className = "pt-5 ">
              Build Your Dream Space With <strong>BuildEasy</strong>
            </h2>
             <h3 className = "pt-4 ">
              We are the team of experienced builders for building your customised dream space.
            </h3>
          </div>

          <div className='col-md-5 col-lg-5 order-1 order-lg-2'>
            <img src={logo} width="110%" height="110%" />
          </div>
        

      </div>



    </div>
  )
}

export default Home;
