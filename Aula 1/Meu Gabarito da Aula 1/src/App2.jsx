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

//export default: posso importar com qualquer nome e sem chaves
//export "sem default": só posso importar entre chaves e com o nome exportado

//Self closing tag
//<Header></Header>
//<Header/>