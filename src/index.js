import reactDom from 'react-dom'
import { BrowserRouter } from 'react-router-dom';
import ContextProvider from './contextProvider.js';

import App from "./App.js";
import './index.css'
reactDom.render(<BrowserRouter><ContextProvider><App/></ContextProvider></BrowserRouter>, document.getElementById('root'))