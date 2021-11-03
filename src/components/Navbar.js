import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';



const Navbar = () => {
  return (
    <div className="row-fluid">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid ">
          <a className="navbar-brand decorate"> <Link to="/"><strong>BuildEasy</strong></Link></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">

              <li className="nav-item decorate
                nav-link"> <Link to="/">Home</Link>
              </li>
              <li className="nav-item decorate
                nav-link"> <Link to="/about">About</Link>
              </li>
              <li className="nav-item decorate
                nav-link"> <Link to="/profile">Profile</Link>
              </li>
              <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                <button className=' btn btn-primary  me-md-2' style = {{borderRadious :50 }}>Login</button>
                <button className='btn btn-success'>SignUp</button>
              </div>

            </ul>


          </div>
        </div>
      </nav>
    </div>

  )
}


export default Navbar
