import React from 'react'
import ItemList from './ItemList' //tá importando assim pq ItemList tá sendo exportado como default
import { artistArray } from '../assets/database/artists'
import { songsArray } from '../assets/database/songs'

const Main = () => {
  return (
    <div className='main'> {/* bloco: main */} {/* elemento: div que engloba os dois textos de cima */}

      {/* esses ItemList são o mesmo componente, mas com algumas modificações - para eles serem diferentes, tenho que passar uma informação para um e uma informação para outro */}
      {/* ItemList de Artistas */}
      <ItemList title="Artistas" items={4} itemsArray={artistArray} path='/artists' idPath='artist' /> {/* escrevendo js para passar o número 5 e não o texto 5 */}
      
      {/* ItemList de Músicas */}
      <ItemList title="Músicas" items={8} itemsArray={songsArray} path='/songs' idPath='song' />   

    </div>
  )
}

export default Main