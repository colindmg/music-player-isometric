import { Loader } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useState } from "react";
import AlbumDetails from "./components/AlbumDetails";
import AudioAnimatedIcon from "./components/AudioAnimatedIcon";
import HoveredAlbumInfos from "./components/HoveredAlbumInfos";
import Indicators from "./components/Indicators";
import MusicPlayer from "./components/MusicPlayer";
import Scene from "./components/Scene";

function App() {
  const [currentAlbumData, setCurrentAlbumData] = useState(null);
  const [hoveredAlbumData, setHoveredAlbumData] = useState(null);
  const [displayOverlay, setDisplayOverlay] = useState(false);
  const [playingAlbum, setPlayingAlbum] = useState(null);
  const [playingSongIndex, setPlayingSongIndex] = useState(null);
  const [isSongPaused, setIsSongPaused] = useState(false);

  return (
    <>
      <div className="fixed w-screen h-screen top-0 left-0 bg-gray-50">
        {/* DEBUG */}
        {/* <div className="absolute z-50 bottom-4 left-4">
          <p>currentAlbumData.name : {currentAlbumData?.name}</p>
          <p>hoveredAlbumData.name : {hoveredAlbumData?.name}</p>
          <p>playingAlbum.name : {playingAlbum?.name}</p>
          <p>playingSongIndex : {playingSongIndex}</p>
          <p>isSongPaused : {isSongPaused ? "true" : "false"}</p>
        </div> */}

        {/* --------------------------------------- */}

        {/* SCENE 3D */}
        <Canvas>
          <Suspense fallback={null}>
            <Scene
              setCurrentAlbumData={setCurrentAlbumData}
              setHoveredAlbumData={setHoveredAlbumData}
              currentAlbumData={currentAlbumData}
            />
          </Suspense>
        </Canvas>
        <Loader
          containerStyles={{
            backgroundColor: "#f3f4f6",
            color: "#191919",
          }}
          barStyles={{
            background: "#191919",
            height: "2px",
            color: "#191919",
          }}
        />

        {/* INDICATEURS */}
        <Indicators isHidden={currentAlbumData ? true : false} />

        {/* INFORMATIONS SUR L'ALBUM HOVERED */}
        <HoveredAlbumInfos
          name={
            hoveredAlbumData ? hoveredAlbumData.name : currentAlbumData?.name
          }
          artist={
            hoveredAlbumData
              ? hoveredAlbumData.artist
              : currentAlbumData?.artist
          }
          isHidden={hoveredAlbumData && !currentAlbumData ? false : true}
        />

        {/* DÉTAILS UNE FOIS L'ALBUM SÉLECTIONNÉ */}
        {currentAlbumData && (
          <AlbumDetails
            album={currentAlbumData}
            playingAlbum={playingAlbum}
            setPlayingAlbum={setPlayingAlbum}
            playingSongIndex={playingSongIndex}
            setPlayingSongIndex={setPlayingSongIndex}
          />
        )}

        {/* PLAYER DE MUSIQUE */}
        <MusicPlayer
          playingAlbum={playingAlbum}
          playingSongIndex={playingSongIndex}
          isHidden={currentAlbumData ? true : false}
          setPlayingSongIndex={setPlayingSongIndex}
          isSongPaused={isSongPaused}
          setIsSongPaused={setIsSongPaused}
        />

        {/* FLÊCHE DE RETOUR DANS LA VUE DE DÉTAILS D'UN ALBUM */}
        {currentAlbumData && (
          <button
            onClick={() => {
              setDisplayOverlay(true);
              setTimeout(() => {
                setCurrentAlbumData(null);
              }, 500);
              setTimeout(() => {
                setDisplayOverlay(false);
              }, 800);
              window.scrollTo(0, 0);
            }}
            className="absolute left-20 top-1/2 p-2 rounded-full bg-neutral-900 hover:scale-105 transition-transform duration-200"
          >
            <img src="/img/icons/return-arrow.svg" className="w-4 h-4" />
          </button>
        )}

        {/* OVERLAY DE TRANSITION ENTRE LES DEUX VUES */}
        <div
          className="pointer-events-none fixed top-0 left-0 bg-gray-50 w-screen h-screen z-50 transition-opacity duration-500 flex flex-col items-center justify-center gap-2"
          style={{
            opacity: displayOverlay ? 1 : 0,
          }}
        >
          <p
            className={`text-neutral-500 text-lg ${
              playingSongIndex && "-translate-x-24"
            }`}
          >
            {playingSongIndex !== null ? "Now playing" : "Not playing..."}
          </p>
          {playingSongIndex !== null && (
            <div className="flex items-center gap-2">
              <p className="text-neutral-900 text-xl font-medium">
                {playingAlbum?.songs[playingSongIndex].title} by{" "}
                {playingAlbum?.artist}
              </p>
              <AudioAnimatedIcon />
            </div>
          )}
        </div>

        {/* LOGO */}
        <div
          className="flex items-center gap-4 absolute top-10 left-10 transition-opacity duration-500"
          style={currentAlbumData ? { opacity: 0 } : {}}
        >
          <img src="/img/logos/logoblack.svg" className="w-16 h-16" />
          <h1 className="text-neutral-900 text-4xl">
            <span className="font-extrabold">Re</span>cords.
          </h1>
        </div>

        {/* FORMES BLURRED */}
        <img
          src="/img/forms/topright.svg"
          className="pointer-events-none absolute top-0 right-0 w-[700px] opacity-100 transition-opacity duration-500"
          style={currentAlbumData ? { opacity: 0 } : {}}
        />
        <img
          src="/img/forms/bottomleft.svg"
          className="pointer-events-none absolute bottom-0 left-0 w-[800px] opacity-100 transition-opacity duration-500"
          style={currentAlbumData ? { opacity: 0 } : {}}
        />
      </div>

      {/* TAILLE DU SCROLL */}
      <div className="h-[600vh]"></div>
    </>
  );
}

export default App;
