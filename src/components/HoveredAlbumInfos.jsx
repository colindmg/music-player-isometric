import PropTypes from "prop-types";

const HoveredAlbumInfos = ({ name, artist, isHidden }) => {
  return (
    <div
      className={`absolute bottom-24 right-10 flex flex-col items-end pointer-events-none ${
        isHidden ? "opacity-0" : ""
      } transition-opacity duration-500`}
    >
      <h3 className="text-3xl text-neutral-900">{name}</h3>
      <h3 className="text-xl font-light text-neutral-500">{artist}</h3>
    </div>
  );
};

HoveredAlbumInfos.propTypes = {
  name: PropTypes.string,
  artist: PropTypes.string,
  isHidden: PropTypes.bool,
};

export default HoveredAlbumInfos;
