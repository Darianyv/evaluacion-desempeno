import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'
import Card from './components/Cards'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Card />
  </StrictMode>,
)
