// aqui a gente vai fazer a nossa requisição
// tem duas formas de fazer as requisições no js:
// Fetch (nativo) e Axios (biblioteca)

// o axios vai me permitir fazer uma requisição do tipo que eu quiser
// e o que eu vou fazer com isso? vou pegar essa informação e jogar dentro do meu artist.js

import axios from "axios";

const URL = "http://localhost:3000";

// no meu front-end essa vai ser a forma como eu vou consumir:
const artistsResponse = await axios.get(`${URL}/artists`); // aqui eu tô condumindo a api // pelo front a gente tá falando pro nosso programa pegar a informação lá no back // consome do back
// se eu estou trabalhando com requisição, isso vai me retornar uma promessa
// esperou isso acontecer e aí sim a gente segue o baile

const songsResponse = await axios.get(`${URL}/songs`);

export const artistArray = artistsResponse.data;
export const songsArray = songsResponse.data;

console.log(artistArray);
