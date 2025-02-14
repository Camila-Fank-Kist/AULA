import React from 'react'
import SingleItem from './SingleItem'

const ItemList = (props) => {

  console.log(props);

  return (
    <div className='item-list'> {/* lista de itens */} {/* bloco/componente */}
      <div className='item-list__header'> {/* elemento do bloco item-list */}
        <h2>Artistas populares</h2>
        <a className='item-list__link' href="/">Mostrar tudo</a>
      </div>

      <div className='item-list__container'>

        <SingleItem />
        <SingleItem />
        <SingleItem />
        <SingleItem />
        <SingleItem />

      </div>
    </div> 
  )
}

export default ItemList