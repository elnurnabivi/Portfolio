import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App'
import ReactGA from 'react-ga4'

ReactGA.initialize('G-CQBRVCCWZQ')

ReactGA.send({
  hitType: 'pageview',
  page: window.location.pathname,
})

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    {/* <BrowserRouter basename="/Portfolio"> */}
    <BrowserRouter basename="">
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
