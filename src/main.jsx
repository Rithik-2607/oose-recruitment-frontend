import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { SavedJobsProvider } from './context/SavedJobsContext'
import './styles/main.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <SavedJobsProvider>
      <App />
    </SavedJobsProvider>
  </BrowserRouter>
)
