import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import store from "./store"; 
import {Provider} from "react-redux"; 

ReactDOM.render (<App/> ,document.getElementById('root'));

reportWebVitals();
