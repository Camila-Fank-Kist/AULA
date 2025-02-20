import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons' // tá adicionando o componente faCirclePlay do pacote @fortawesome/free-solid-svg-icons ?
import { Link } from 'react-router-dom'

const SingleItem = ( {id, image, name, banner, artist, idPath} ) => {
  return (
    <Link to={`${idPath}/${id}`} className='single-item'> {/* bloco/componente */}

      <div className='single-item__div-image-button'>
        <div className='single-item__div-image'>
          <img className='single-item__image' src={image} alt={`Imagem do Artista ${name}`} />
        </div>
        {/* <FontAwesomeIcon icon="fa-solid fa-circle-play" /> */}
        <FontAwesomeIcon className='single-item__icon' icon={faCirclePlay} /> {/* assim traz outro componente: a gente importa tanto o componente FontAwesomeIcon quando o ícone, como se ele fosse uma imagem */}
      </div>

      <div className='single-item__texts'>
        <div className='single-item__2lines'>
          <p className='single-item__title'>{name}</p>
        </div>
        <p className='single-item__type'>{ artist ?? "Artista" }</p> {/* Tem artista? Se sim, usa ele mesmo, senão, mostra esse outro -> Se tiver algum valor nele, ele usa ele mesmo */}
      </div>
        
    </Link>
  )
}

export default SingleItem;