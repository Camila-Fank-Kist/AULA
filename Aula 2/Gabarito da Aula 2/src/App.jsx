import React from 'react'
import Header from './components/Header' //o meu App tá importando o Header
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Artists from './pages/Artists'
import Artist from './pages/Artist'
import Songs from './pages/Songs'
import Song from './pages/Song'

//Componente/função App:
const App = () => {
  return ( 
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/artists' element={<Artists />} />
        <Route path='/artist/:id' element={<Artist />} />
        <Route path='/songs' element={<Songs />} />
        <Route path='/song/:id' element={<Song />} />
      </Routes>
    </BrowserRouter> 
  );
};

export default App

// path: caminho que essa rotá é responsável por atender
// element: qual componente vai ser executado quando entrar nessa rota
// path='/song/:id' : esse /:id significa que a rota /song vai ser acessada e tudo o que vier depois da segunda barra vai ser entendido como um parâmetro