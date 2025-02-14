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

        <div className='item-list__container'>

          <div className='single-item'> {/* bloco/componente */}
            <div className='single-item__div-image-button'>
              <div className='single-item__div-image'>
                <img className='single-item__image' src="https://i.scdn.co/image/ab676161000051744dcd8a3bff84cd7703892cf4" alt="Imagem do Artista X" />
              </div>
              {/* <FontAwesomeIcon icon="fa-solid fa-circle-play" /> */}
              <FontAwesomeIcon className='single-item__icon' icon={faCirclePlay} /> {/* assim traz outro componente: a gente importa tanto o componente FontAwesomeIcon quando o ícone, como se ele fosse uma imagem */}
            </div>

            <div className='single-item__texts'>
              <div className='single-item__2lines'>
                <p className='single-item__title'>Henrique & Juliano teste teste teste teste teste teste</p>
              </div>
              <p className='single-item__type'>Artista</p>
            </div>
              
          </div>

          <div className='single-item'> {/* bloco/componente */}
            <div className='single-item__div-image-button'>
              <div className='single-item__div-image'>
                <img className='single-item__image' src="https://i.scdn.co/image/ab676161000051744dcd8a3bff84cd7703892cf4" alt="Imagem do Artista X" />
              </div>
              {/* <FontAwesomeIcon icon="fa-solid fa-circle-play" /> */}
              <FontAwesomeIcon className='single-item__icon' icon={faCirclePlay} /> {/* assim traz outro componente: a gente importa tanto o componente FontAwesomeIcon quando o ícone, como se ele fosse uma imagem */}
            </div>

            <div className='single-item__texts'>
              <div className='single-item__2lines'>
                <p className='single-item__title'>Henrique & Juliano teste teste teste teste teste teste</p>
              </div>
              <p className='single-item__type'>Artista</p>
            </div>
              
          </div>

          <div className='single-item'> {/* bloco/componente */}
            <div className='single-item__div-image-button'>
              <div className='single-item__div-image'>
                <img className='single-item__image' src="https://i.scdn.co/image/ab676161000051744dcd8a3bff84cd7703892cf4" alt="Imagem do Artista X" />
              </div>
              {/* <FontAwesomeIcon icon="fa-solid fa-circle-play" /> */}
              <FontAwesomeIcon className='single-item__icon' icon={faCirclePlay} /> {/* assim traz outro componente: a gente importa tanto o componente FontAwesomeIcon quando o ícone, como se ele fosse uma imagem */}
            </div>

            <div className='single-item__texts'>
              <div className='single-item__2lines'>
                <p className='single-item__title'>Henrique & Juliano teste teste teste teste teste teste</p>
              </div>
              <p className='single-item__type'>Artista</p>
            </div>
              
          </div>

          <div className='single-item'> {/* bloco/componente */}
            <div className='single-item__div-image-button'>
              <div className='single-item__div-image'>
                <img className='single-item__image' src="https://i.scdn.co/image/ab676161000051744dcd8a3bff84cd7703892cf4" alt="Imagem do Artista X" />
              </div>
              {/* <FontAwesomeIcon icon="fa-solid fa-circle-play" /> */}
              <FontAwesomeIcon className='single-item__icon' icon={faCirclePlay} /> {/* assim traz outro componente: a gente importa tanto o componente FontAwesomeIcon quando o ícone, como se ele fosse uma imagem */}
            </div>

            <div className='single-item__texts'>
              <div className='single-item__2lines'>
                <p className='single-item__title'>Henrique & Juliano teste teste teste teste teste teste</p>
              </div>
              <p className='single-item__type'>Artista</p>
            </div>
              
          </div>

          <div className='single-item'> {/* bloco/componente */}
            <div className='single-item__div-image-button'>
              <div className='single-item__div-image'>
                <img className='single-item__image' src="https://i.scdn.co/image/ab676161000051744dcd8a3bff84cd7703892cf4" alt="Imagem do Artista X" />
              </div>
              {/* <FontAwesomeIcon icon="fa-solid fa-circle-play" /> */}
              <FontAwesomeIcon className='single-item__icon' icon={faCirclePlay} /> {/* assim traz outro componente: a gente importa tanto o componente FontAwesomeIcon quando o ícone, como se ele fosse uma imagem */}
            </div>

            <div className='single-item__texts'>
              <div className='single-item__2lines'>
                <p className='single-item__title'>Henrique & Juliano teste teste teste teste teste teste</p>
              </div>
              <p className='single-item__type'>Artista</p>
            </div>
              
          </div>

          <div className='single-item'> {/* bloco/componente */}
            <div className='single-item__div-image-button'>
              <div className='single-item__div-image'>
                <img className='single-item__image' src="https://i.scdn.co/image/ab676161000051744dcd8a3bff84cd7703892cf4" alt="Imagem do Artista X" />
              </div>
              {/* <FontAwesomeIcon icon="fa-solid fa-circle-play" /> */}
              <FontAwesomeIcon className='single-item__icon' icon={faCirclePlay} /> {/* assim traz outro componente: a gente importa tanto o componente FontAwesomeIcon quando o ícone, como se ele fosse uma imagem */}
            </div>

            <div className='single-item__texts'>
              <div className='single-item__2lines'>
                <p className='single-item__title'>Henrique & Juliano teste teste teste teste teste teste</p>
              </div>
              <p className='single-item__type'>Artista</p>
            </div>
              
          </div>

          <div className='single-item'> {/* bloco/componente */}
            <div className='single-item__div-image-button'>
              <div className='single-item__div-image'>
                <img className='single-item__image' src="https://i.scdn.co/image/ab676161000051744dcd8a3bff84cd7703892cf4" alt="Imagem do Artista X" />
              </div>
              {/* <FontAwesomeIcon icon="fa-solid fa-circle-play" /> */}
              <FontAwesomeIcon className='single-item__icon' icon={faCirclePlay} /> {/* assim traz outro componente: a gente importa tanto o componente FontAwesomeIcon quando o ícone, como se ele fosse uma imagem */}
            </div>

            <div className='single-item__texts'>
              <div className='single-item__2lines'>
                <p className='single-item__title'>Henrique & Juliano teste teste teste teste teste teste</p>
              </div>
              <p className='single-item__type'>Artista</p>
            </div>
              
          </div>

        </div>
      </div>    
    </div>
  )
}

export default Main