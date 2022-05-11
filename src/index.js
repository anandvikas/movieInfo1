import React from 'react'
import reactDOM from 'react-dom'
import {BrowserRouter, HashRouter} from 'react-router-dom'
import './index.css'
import App from './components/App'

reactDOM.render(<HashRouter><App/></HashRouter>, document.getElementById('root'))