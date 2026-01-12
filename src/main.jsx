import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

const preloader = document.getElementById('preloader')

if (preloader) {
  window.addEventListener('load', () => {
    preloader.style.opacity = '0'
    setTimeout(() => preloader.remove(), 300)
  })
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
