import { motion } from "framer-motion";
import PropTypes from "prop-types";

const AlbumDetails = ({ album }) => {
  return (
    <div className="absolute left-[53%] h-[550px] top-1/2 -translate-y-1/2 flex flex-col gap-10">
      {/* TITRE ET AUTEUR */}
      <div className="flex flex-col">
        <motion.h3
          className="text-3xl text-neutral-900"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.5,
            ease: "easeOut",
          }}
        >
          {album.name}
        </motion.h3>
        <motion.h3
          className="text-xl font-light text-neutral-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 0.1,
            duration: 0.5,
            ease: "easeOut",
          }}
        >
          {album.artist} • {album.year} • {album.songs.length} songs
        </motion.h3>
      </div>

      {/* LISTE DES TITRES */}
      <div className="flex flex-col h-full overflow-y-scroll">
        {album.songs.map((song, index) => (
          <motion.div
            key={song.title + " - " + album.artist}
            className="flex gap-40 items-center justify-between px-4 py-2 cursor-pointer rounded-lg hover:bg-neutral-100 transition-colors duration-100"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              delay: 0.3 + index * 0.1,
              duration: 0.4,
              ease: "easeOut",
            }}
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
          </motion.div>
        ))}
      </div>
    </div>
  );
};

AlbumDetails.propTypes = {
  album: PropTypes.object,
};

export default AlbumDetails;
