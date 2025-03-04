import React from "react";
import SongItem from "./SongItem";
import { useState } from "react";

const SongList = ({ songsArray }) => {
  // let items = 5; // variável comum

  const [items, setItems] = useState(5); // desestruturação do array que a função useState retorna
  // console.log(items);

  return (
    <div className="song-list">
      {songsArray
        .filter((currentValue, index) => index < items)
        .map((currentObj, index) => (
          <SongItem {...currentObj} index={index} key={index} />
        ))}

      <p
        className="song-list__see-more"
        onClick={() => {
          setItems(items + 5);
          // items += 5;
          // console.log(items);
        }}
      >
        Ver mais
      </p>
    </div>
  );
};

export default SongList;
