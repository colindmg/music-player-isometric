import PropTypes from "prop-types";

const AlbumDetails = ({ album }) => {
  return (
    <div className="absolute left-[53%] h-[550px] top-1/2 -translate-y-1/2 overflow-y-scroll flex flex-col gap-10">
      {/* TITRE ET AUTEUR */}
      <div className="flex flex-col">
        <h3 className="text-3xl text-neutral-900">{album.name}</h3>
        <h3 className="text-xl font-light text-neutral-500">
          {album.artist} • {album.year} • {album.songs.length} titres
        </h3>
      </div>

      {/* LISTE DES TITRES */}
      <div className="flex flex-col">
        {album.songs.map((song, index) => (
          <div
            key={song.title + " - " + album.artist}
            className="flex gap-40 items-center justify-between px-4 py-2 cursor-pointer rounded-lg hover:bg-neutral-100 transition-colors duration-100"
          >
            <div className="flex items-center">
              <p className="font-semibold w-5 text-sm">{index + 1}.</p>
              <div className="flex flex-col">
                <h3 className="text-lg text-neutra-900">{song.title}</h3>
              </div>
            </div>

            <img
              src={
                song.isLoved
                  ? "/img/icons/heart-filled.svg"
                  : "/img/icons/heart.svg"
              }
              alt="Icone de coeur"
              className="w-5 h-5"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

AlbumDetails.propTypes = {
  album: PropTypes.object,
};

export default AlbumDetails;
