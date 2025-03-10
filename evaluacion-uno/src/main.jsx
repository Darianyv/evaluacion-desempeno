import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import MenuNav from './components/MenuNav'
import Cards from './components/Cards'
import Body from './components/Body'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MenuNav />
    <Body />
  </StrictMode>,
)
