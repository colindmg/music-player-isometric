import PropTypes from "prop-types";

const MusicPlayer = ({ isHidden, playingAlbum, playingSongIndex }) => {
  return (
    <div
      className="absolute w-96 top-36 left-10 bg-[#F1F1F1] p-2.5 rounded-lg"
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

      {/* <audio
        src={
          playingAlbum?.songs[playingSongIndex].mp3
            ? playingAlbum?.songs[playingSongIndex].mp3
            : ""
        }
        autoPlay
        preload="auto"
      ></audio> */}
    </div>
  );
};

MusicPlayer.propTypes = {
  isHidden: PropTypes.bool,
  playingAlbum: PropTypes.object,
  playingSongIndex: PropTypes.number,
};

export default MusicPlayer;
