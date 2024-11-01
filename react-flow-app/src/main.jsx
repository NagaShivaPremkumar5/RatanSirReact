import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render//(rendering the app component to html file)
(
  <StrictMode>
    <App />
  </StrictMode>,
)
