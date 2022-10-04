import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {BrowserRouter} from 'react-router-dom'
import { AppLevelProvider } from './context/AppLevelContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <AppLevelProvider>
    <App />
    </AppLevelProvider>
  </BrowserRouter>
)
