import React from 'react'
import SingleItem from './SingleItem'

// a função recebe como parâmetro o objeto "props"
const ItemList = ( { title, items } ) => { // desestruturação: a variável "title" vai armazenar o valor da variável de mesmo nome do objeto "props"
 
  // console.log("title: ", title);
  // console.log("items: ", items);

  return (
    <div className='item-list'> {/* lista de itens */} {/* bloco/componente */}
      <div className='item-list__header'> {/* elemento do bloco item-list */}
        <h2>{title} populares</h2> {/* sempre que eu quero escrever js no meio do jsx, eu uso chaves */}
        <a className='item-list__link' href="/">Mostrar tudo</a>
      </div>

      <div className='item-list__container'>

        {Array(items).fill().map( () => <SingleItem /> )}
        {/* tá criando um array com 'items' elementos */}
        {/* tá preenchendo todos os elementos do array com 'undefined' */}
        {/* map: percorre cada elemento do array e retorna um array de mesmo tamanho */}
        {/* Dentro do map tem uma arrow function. Os parâmeteos da função estão entre parênteses, e a função está retornando <SingleItem /> */}
        {/* o map tá preenchendo cada índice do array com o retorno da arrow function -> o resultado do map é um novo array que contém 'items' instâncias do componente '<SingleItem />' */}
        {/* se o map só retorna um array, como <SingleItem /> é exibido na tela? */}
        {/* Renderização no React: Quando você coloca essa expressão JSX dentro de um componente React, o React renderiza o array resultante. O React é capaz de lidar com arrays de elementos JSX e renderizá-los como uma lista de componentes na interface do usuário. Portanto, mesmo que o map retorne um array, o React renderiza cada um dos elementos desse array na tela. */}

      </div>
    </div> 
  )
}

export default ItemList