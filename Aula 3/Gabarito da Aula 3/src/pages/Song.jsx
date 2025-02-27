import React from "react";
import Player from "../components/Player";
import { Link, useParams } from "react-router-dom";
import { songsArray } from "../assets/database/songs";
import { artistArray } from "../assets/database/artists";

const Song = () => {
  const { id } = useParams();

  const {image, name, duration, artist, audio} = songsArray.filter(
    (currentSongObj) => currentSongObj.id === Number(id)
  )[0];
  //console.log(songObj);

  const artistObj = artistArray.filter(
    (currentArtistObj) => currentArtistObj.name === artist
  )[0];
  //console.log(artistId);


  // para o player__controllers:
  const songsArrayFromArtist = songsArray.filter(
    (currentSongObj) => currentSongObj.artist === artist
  );
  // console.log(songsArrayFromArtist);
  const randomIndex = Math.floor( Math.random() * (songsArrayFromArtist.length - 1));
  const randomSongIdFromArtist = songsArrayFromArtist[randomIndex].id;
  const randomIndex2 = Math.floor( Math.random() * (songsArrayFromArtist.length - 1));
  const randomSongId2FromArtist = songsArrayFromArtist[randomIndex2].id;

  return (
    <div className="song">
      <div className="song__container">
        <div className="song__image-container">
          <img
            src={image}
            alt={`Imagem da música ${name}`}
          />
        </div>
      </div>

      <div className="song__bar">
        <Link to={`/artist/${artistObj.id}`} className="song__artist-image">
          <img
            width={75}
            height={75}
            src={artistObj.image}
            alt={`Imagem do artista ${artist}`}
          />
        </Link>

        <Player duration={duration} randomSongIdFromArtist={randomSongIdFromArtist} randomSongId2FromArtist={randomSongId2FromArtist} />

        <div>
          <p className="song__name">{name}</p>
          <p>{artist}</p>
        </div>
      </div>
    </div>
  );
};

export default Song;
