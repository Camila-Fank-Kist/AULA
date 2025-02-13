import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons' // tá adicionando o componente faCirclePlay do pacote @fortawesome/free-solid-svg-icons ?

const Main = () => {
  return (
    <div className='main'> {/* bloco: main */} {/* elemento: div que engloba os dois textos de cima */}
      <div className='item-list'> {/* lista de itens */} {/* bloco/componente */}
        <div className='item-list__header'> {/* elemento do bloco item-list */}
          <h2>Artistas populares</h2>
          <a className='item-list__link' href="/">Mostrar tudo</a>
        </div>

        <div className='single-item'> {/* bloco/componente */}
          <img className='single-item__image' src="https://i.scdn.co/image/ab676161000051744dcd8a3bff84cd7703892cf4" alt="Imagem do Artista X" />
          {/* <FontAwesomeIcon icon="fa-solid fa-circle-play" /> */}
          <FontAwesomeIcon icon={faCirclePlay} /> {/* assim traz outro componente: a gente importa tanto o componente FontAwesomeIcon quando o ícone, como se ele fosse uma imagem */}
          <p>Henrique & Juliano</p>
          <p>Artista</p>
        </div>

      </div>    
    </div>
  )
}

export default Main