import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';



const Navbar = () => {
    return (
         <div className = "row-fluid">
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand decorate"> <Link to = "/">BuildEasy</Link></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mr-auto">
              
            <li className="nav-item decorate
                nav-link"> <Link to = "/">Home</Link>
              </li>
              <li className="nav-item decorate
                nav-link"> <Link to = "/about">About</Link>
              </li>
              <li className="nav-item decorate
                nav-link"> <Link to = "/profile">Profile</Link>
              </li>
             
            </ul>
          </div>
        </div>
      </nav>
      </div>
        
    )
}


export default Navbar
