import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './ProductList.css'
import App from './ProductList.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
