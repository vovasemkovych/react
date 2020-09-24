import React from 'react';
import ReactDOM from 'react-dom';
import './style.scss';
import './menu.scss';
import './animation.scss';
import './home.css'
import App from './App';
import { BrowserRouter } from 'react-router-dom';


ReactDOM.render(
	
<BrowserRouter>
     <App />
   </BrowserRouter>,
document.getElementById('root')
);

