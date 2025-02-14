import React from 'react'
import ItemList from './ItemList'


const Main = () => {
  return (
    <div className='main'> {/* bloco: main */} {/* elemento: div que engloba os dois textos de cima */}

      {/* esses ItemList são o mesmo componente, mas com algumas modificações - para eles serem diferentes, tenho que passar uma informação para um e uma informação para outro */}
      {/* ItemList de Artistas */}
      <ItemList title="Artistas Populares" /> 
      
      {/* ItemList de Músicas */}
      <ItemList title="Músicas Populares" />   

    </div>
  )
}

export default Main