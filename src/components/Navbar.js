import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';


const Navbar = () => {
    return (
        <Router>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <div class="container-fluid">
                    <li class="navbar-brand"><Link to="/"> Home</Link></li>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav">

                            <li class="nav-item"><Link to="/"> Home</Link></li>
                            <li class="nav-item"><Link to="/profile">Profile</Link></li>
                            <li class="nav-item"> <Link to="/navbar">Navbar</Link></li>
                            <li class="nav-item"><Link to="/about">About</Link></li>

                        </div>
                    </div>
                </div>
            </nav>
        </Router>
    )
}


export default Navbar
