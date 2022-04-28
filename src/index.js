import reactDom from 'react-dom'
import { BrowserRouter, HashRouter } from 'react-router-dom';
import App from './components/common/App.js';
import ContextProvider from './components/common/contextProvider.js';


import './index.css'
reactDom.render(<HashRouter><ContextProvider><App/></ContextProvider></HashRouter>, document.getElementById('root'))