import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import { Link, useParams } from "react-router-dom";
import SongList from "../components/SongList";
import { artistArray } from "../assets/database/artists";
import { songsArray } from "../assets/database/songs";

const Artist = () => {
  const { id } = useParams(); // useParams() pega o id da url, por causa da rota inteligente em App.jsx //colocando na variável id o valor do atributo id do objeto que a função useParams retorna
  // console.log(id);

  const { name, banner } = artistArray.filter(
    (currentArtistObj) => currentArtistObj.id === Number(id)
  )[0]; //desestruturando: colocando "{ name, banner }" no lugar de "artistObj"
  // console.log(artistObj)

  const songsArrayFromArtist = songsArray.filter(
    (currentSongObj) => currentSongObj.artist === name
  );
  //console.log(songsArrayFromArtist)

  const randomIndex = Math.floor( Math.random() * (songsArrayFromArtist.length - 1));
  const randomSongIdFromArtist = songsArrayFromArtist[randomIndex].id; // mas se eu dou play eu não quero que rode só as músicas daquele artista ???

  // console.log(randomSongIdFromArtist)

  return (
    <div className="artist">
      <div
        className="artist__header"
        style={{
          backgroundImage:
            `linear-gradient(to bottom, var(--_shade), var(--_shade)), url(${banner})`,
        }}
      >
        <h2 className="artist__title">{name}</h2>
      </div>

      <div className="artist__body">
        <h2>Populares</h2>
        <SongList songsArray={songsArrayFromArtist} />
      </div>

      <Link to={`/song/${randomSongIdFromArtist}`}>
        <FontAwesomeIcon
          className="single-item__icon single-item__icon--artist"
          icon={faCirclePlay}
        />
      </Link>
    </div>
  );
};

export default Artist;
