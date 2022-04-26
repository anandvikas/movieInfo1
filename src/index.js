import reactDom from 'react-dom'
import { BrowserRouter } from 'react-router-dom';
import App from './components/common/App.js';
import ContextProvider from './components/common/contextProvider.js';


import './index.css'
reactDom.render(<BrowserRouter><ContextProvider><App/></ContextProvider></BrowserRouter>, document.getElementById('root'))