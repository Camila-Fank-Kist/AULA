import React from 'react' // isso tbm é uma variável
import logoSpotify from "../assets/logo/spotify-logo.png"
// Em jsx, a gente tem que importar a imagem para dentro do arquivo
// logoSpotify é o nome que eu tô dando para a imagem que eu estou importando
// logoSpotify é uma variável: eu tô pegando essa imagem (../assets/logo/spotify-logo.png) e jogando em logoSpotify
// Uma variável é um nome que armazena uma informação

const Header = () => {
  return <div className='header'>
    <img src={logoSpotify} alt="Logo do Spotify" /> 
    <a className='header__link' href="/"><h1>Spotify</h1></a>
  </div>; // agora a gente já tem a estrutura do header
}

export default Header


//src="logoSpotify" -> assim não pode ser, pois quando você escreve algo em js entre aspas, é um texto, então ele não vai puxar nenhuma variável
//quando eu quero ler uma variável, eu tenho que colocar ela sem as aspas: src=logoSpotify -> só que assim também dá erro, porque eu quero colocar 
    // uma variável no meio do "html", ou seja, eu quero escrever js no meio do "html" -> como eu faço isso em jsx? Coloco a variável (que é um código 
    // em js) entre chaves: src={logoSpotify}
//src vai pegar javascript -> uma variável que armazena o endereço de uma imagem

//toda vez que eu quero colocar um pouco de javascript no meio do meu "html", eu tenho que colocar entre chaves