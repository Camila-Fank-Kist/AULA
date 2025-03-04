import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCirclePlay,
  faCirclePause,
  faBackwardStep,
  faForwardStep,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useRef } from "react"; // é um Hook para atribuir uma referência a uma variável
import { useState } from "react";
import { useEffect } from "react"; // é um outro Hook // é usado quando você precisa de uma limpeza // executa pela primeira vez assim que o componente é montado (primeira vez que ele é renderizado) // quando o componente é destruído, também roda essa função de limpeza

const Player = ({
  duration,
  randomSongIdFromArtist,
  randomSongId2FromArtist,
  audio,
}) => {

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60)
      .toString()
      .padStart(2, "0");
    const seconds = Math.floor(timeInSeconds - minutes * 60)
      .toString()
      .padStart(2, "0");

    return `${minutes}:${seconds}`;
  };

  const timeInSeconds = (timeString) => {
    const splitArray = timeString.split(":");
    const minutes = Number(splitArray[0]);
    const seconds = Number(splitArray[1]);
  
    return seconds + minutes * 60;
  };

  const audioPlayer = useRef(); // eu criei uma referência nessa variável audioPlayer
  // console.log(audioPlayer.current.play());
  // o useRef cria o link entre a variável "audioPlayer" e a tag jsx e armazena a variável "audio" na chave "current", que é o estado atual do "audioPlayer"
  const [isPlaying, setIsPlaying] = useState(false); // recapitulando: o useState() entrega dois valores: o primeiro é uma variável que pega o valor "false" e o segundo é uma função que permite alterar o valor dessa variável
  const [currentTime, setCurrentTime] = useState(formatTime(0));

  const progressBar = useRef(); 

  const durationInSeconds = timeInSeconds(duration);
  // console.log(durationInSeconds);

  const playPause = () => {
    isPlaying ? audioPlayer.current.pause() : audioPlayer.current.play();
    setIsPlaying(!isPlaying);

    
    // console.log(formatTime(audioPlayer.current.currentTime));
  };

  // na primeira vez que o componente for montado (quando ele for renderizado), ele executa o useEffect:
  useEffect(() => {
    // aqui vai o que é para ser executado:
    const intervalId = setInterval(() => {
      if (isPlaying)
        setCurrentTime(formatTime(audioPlayer.current.currentTime)); // atualizando o currentTime a cada 1 segundo

      progressBar.current.style.setProperty(
        "--_progress",
        (audioPlayer.current.currentTime / durationInSeconds) * 100 + "%"
      );
    }, 1000); 

    // vai rodar esse return quando o componente for destruído ou re-renderizado => é a função de limpeza
    return () => clearInterval(intervalId);
  }, [isPlaying]); // qual variável vai motivar uma nova execução do useEffect // ele vai limpar e executar de novo quando a variável que estiver nessa lista for alterada

  return (
    <div className="player">
      <div className="player__controllers">
        <Link to={`/song/${randomSongIdFromArtist}`}>
          <FontAwesomeIcon className="player__icon" icon={faBackwardStep} />
        </Link>

        <FontAwesomeIcon
          className="player__icon player__icon--play"
          icon={isPlaying ? faCirclePause : faCirclePlay}
          onClick={() => playPause()}
        />

        <Link to={`/song/${randomSongId2FromArtist}`}>
          <FontAwesomeIcon className="player__icon" icon={faForwardStep} />
        </Link>
      </div>
      <div className="player__progress">
        <p>{currentTime}</p>

        <div className="player__bar">
          <div ref={progressBar} className="player__bar-progress"></div>
        </div>
        <p>{duration}</p>
      </div>
      <audio ref={audioPlayer} src={audio}></audio>{" "}
      {/* agora eu criei um link entre as duas variaveis */}{" "}
      {/* agora quando eu falar audioPlayer.{faz_alguma_coisa}, ele vai entender que eu estou me referindo a esse elemrnto jsx */}
    </div>
  );
};

export default Player;
