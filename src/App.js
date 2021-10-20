import React from 'react';
import About from './components/About';
import Home from './components/Home';
import { BrowserRouter } from 'react-router-dom';
import './App.css';

function App() {
  return <>
   <ul className="nav justify-content-end">
  <li className="nav-item">
    <a className="nav-link active" aria-current="page" href="/">Active</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="/">Link</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="/">Link</a>
  </li>
  <li className="nav-item">
    <a className="nav-link disabled" href= "/">Disabled</a>
  </li>
</ul>
  </>
}

export default App;
