import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx' //importando a função/componente App //import que veio de um export default

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
) //colocando o commponente App dentro do root
