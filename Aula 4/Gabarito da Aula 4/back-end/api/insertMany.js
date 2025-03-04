// fazer uma vez só para preencher o banco de dados

import { artistArray } from "../../front-end/src/assets/database/artists.js";
import { songsArray } from "../../front-end/src/assets/database/songs.js";
import { db } from "./connect.js";

const newArtistArray = artistArray.map((currentArtistObj) => {
  const newArtistObj = { ...currentArtistObj }; // pegando tudo o que tem em currentArtistObj, fazendo uma cópia e jogando dentro dessa nova variável
  delete newArtistObj.id;

  return newArtistObj;
});

const newSongsArray = songsArray.map((currentSongObj) => {
  const newSongObj = { ...currentSongObj };
  delete newSongObj.id;

  return newSongObj;
});

const songsResponse = await db.collection("songs").insertMany(newSongsArray); // essa instrução não funciona assim: pedi, fez. eu peço, ela faz a conexão, faz sei lá mais o que... então ela me retorna uma promessa
//e toda vez que trabalhamos com promessa é importante usar o await, senão ele vai sair atropelando código e a gente não vai ter a resposta que a gente queria

const artistsResponse = await db.collection("artists").insertMany(newArtistArray);

console.log(songsResponse);
console.log(artistsResponse);

// console.log(newArtistArray)
// console.log(newSongsArray)
