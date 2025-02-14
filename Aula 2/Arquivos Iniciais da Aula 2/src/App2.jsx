//rafce + enter:
import React from 'react'

const App2 = () => {
  return (
    <div>App2</div>
  )
}

export default App2

//Arrow function: forma diferente de declarar/usar uma função
//Mais simplificado:
//const App2 = () => <h1>Olá, Mundo!</h1>;


//Componente/função App com outra sintaxe:
//
//function App() {
//  console.log("Olá, Mundo!");
//  return <h1>Olá, Mundo!</h1>;
//}
//
//export default App;


/******************* DICAS *******************/

//Nomeação de componentes: 
//PascalCase

//Nomeação de variável, função...:
//camelCase

// Nomeação de classes em CSS
// Medodologia BEM
// Blocks (um bloco é um componente - entidade independente que posso utilizar em qualquer lugar - o header é um bloco)
   // bloco -> ex: header
// Elements (um elemento não é um componente, mas faz parte de um bloco - o link "Spotify" é um elemento que faz parte do bloco header)
   // bloco__elemento -> ex: header_link
// Modifiers
   // bloco__elemento--modificador -> ex: header_link--small
// Nomes compostos são separados por -

//export default: posso importar com qualquer nome e sem chaves
//export "sem default": só posso importar entre chaves e com o nome exportado

//Self closing tag
//<Header></Header>
//<Header/>

// O React só pode retornar 1 elemento