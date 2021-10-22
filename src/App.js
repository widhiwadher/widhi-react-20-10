import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import React from "react";
import About from './components/About';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Profile from './components/Profile';

function App() {
  return (
    <>
   

    <Router>
    


     <Switch>
      <Route path="/" component={Home} exact></Route>
      <Route path= "/about" component={About}></Route>
      <Route path= "/navbar" component={Navbar}></Route>
      <Route path= "/profile" component={Profile}></Route>
   
      </Switch>
  
    </Router>

   </>
  )
}


export default App;
