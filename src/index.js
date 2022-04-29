import reactDom from 'react-dom'
import { HashRouter } from 'react-router-dom';
import App from './components/common/App.js';
// import ContextProvider from './components/common/contextProvider.js';


import './index.css'
reactDom.render(<HashRouter><App/></HashRouter>, document.getElementById('root'))