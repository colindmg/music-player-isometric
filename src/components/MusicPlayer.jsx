import PropTypes from "prop-types";
import { useEffect, useRef, useState } from "react";

const MusicPlayer = ({ isHidden, playingAlbum, playingSongIndex }) => {
  const audioRef = useRef(null);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    const audioElement = audioRef.current;
    if (audioElement) {
      audioElement.addEventListener("loadedmetadata", () => {
        setDuration(audioElement.duration);
      });

      audioElement.addEventListener("timeupdate", () => {
        setCurrentTime(audioElement.currentTime);
      });
    }

    return () => {
      if (audioElement) {
        audioElement.removeEventListener("loadedmetadata", () => {
          setDuration(audioElement.duration);
        });

        audioElement.removeEventListener("timeupdate", () => {
          setCurrentTime(audioElement.currentTime);
        });
      }
    };
  }, [playingAlbum, playingSongIndex]);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };
  return (
    <div
      className="absolute w-[350px] top-36 left-10 bg-[#F1F1F1] p-2.5 rounded-lg transition-opacity duration-300"
      style={{ opacity: isHidden ? 0 : 100 }}
    >
      {/* INFORMATIONS SUR LE SON EN TRAIN DE JOUER */}
      <div className="flex justify-between items-center">
        {/* Image de cover et titre + artiste */}
        <div className="flex items-center gap-3">
          <img
            src={playingAlbum?.cover}
            alt={playingAlbum?.name}
            className="w-24 h-24 rounded-md"
          />
          <div>
            <p className="text-neutral-900 text-xl font-medium">
              {playingAlbum?.songs[playingSongIndex].title}
            </p>
            <p className="text-[#737373]">by {playingAlbum?.artist}</p>
          </div>
        </div>

        {/* Coeur si le son est liké */}
        {playingAlbum?.songs[playingSongIndex].isLoved ? (
          <img
            src="/img/icons/heart-filled.svg"
            alt="Liked song icon"
            className="w-8 h-8"
          />
        ) : (
          <img
            src="/img/icons/heart.svg"
            alt="Not liked song icon"
            className="w-8 h-8"
          />
        )}
      </div>

      {/* BARRE DE LECTURE DU MORCEAU */}
      <div className="flex items-center gap-2 mt-3 mr-1">
        <p className="text-[#737373] text-xs w-8">{formatTime(currentTime)}</p>
        <div className="relative w-full h-1 bg-white rounded-full">
          <div
            className="absolute h-full bg-neutral-900 rounded-full"
            style={{ width: `${(currentTime / duration) * 100}%` }}
          ></div>
        </div>
        <p className="text-[#737373] text-xs">{formatTime(duration)}</p>
      </div>

      <audio
        ref={audioRef}
        src={
          playingAlbum?.songs[playingSongIndex].mp3
            ? playingAlbum?.songs[playingSongIndex].mp3
            : ""
        }
        autoPlay
        preload="auto"
      ></audio>
    </div>
  );
};

MusicPlayer.propTypes = {
  isHidden: PropTypes.bool,
  playingAlbum: PropTypes.object,
  playingSongIndex: PropTypes.number,
};

export default MusicPlayer;
