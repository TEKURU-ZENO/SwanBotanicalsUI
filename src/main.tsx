import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '../App.tsx'
import '../styles/globals.css'

// Remove loading indicator when app is ready
document.addEventListener('DOMContentLoaded', () => {
  document.body.classList.add('app-loaded')
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)