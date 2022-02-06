
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import React from "react";
import { Typeahead } from 'react-bootstrap-typeahead';
import About from './components/About';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import Footer from "./components/Footer";
import Searchbox from './components/Searchbox';
import Cities from "./components/Cities";
import Reducer from './reducers/Reducer';
import "./App.css";
import Signup from './components/Signup';
 

function App() {
  return (
    <>

      <Router>
        <Navbar></Navbar>


        <Switch>
          <Route path="/" component={Home} exact></Route>
          <Route path="/about" component={About}></Route>
         
          <Route path="/profile" component={Profile}></Route>
          <Route path="/signup" component={Signup}></Route>

        </Switch>

      </Router>

    </>
  )
}


export default App;
