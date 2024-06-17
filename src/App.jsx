import { Canvas } from "@react-three/fiber";
import { useState } from "react";
import AlbumDetails from "./components/AlbumDetails";
import HoveredAlbumInfos from "./components/HoveredAlbumInfos";
import Indicators from "./components/Indicators";
import Scene from "./components/Scene";

function App() {
  const [currentAlbumData, setCurrentAlbumData] = useState(null);
  const [hoveredAlbumData, setHoveredAlbumData] = useState(null);
  const [displayOverlay, setDisplayOverlay] = useState(false);

  return (
    <>
      <div className="fixed w-screen h-screen top-0 left-0 bg-gray-50">
        {/* SCENE 3D */}
        <Canvas>
          <Scene
            setCurrentAlbumData={setCurrentAlbumData}
            setHoveredAlbumData={setHoveredAlbumData}
            currentAlbumData={currentAlbumData}
          />
        </Canvas>

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
        {currentAlbumData && <AlbumDetails album={currentAlbumData} />}

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
          className="pointer-events-none fixed top-0 left-0 bg-gray-50 w-screen h-screen z-50 transition-opacity duration-500"
          style={{
            opacity: displayOverlay ? 1 : 0,
          }}
        ></div>

        {/* LOGO */}
        <img
          src="/img/logos/logoblack.svg"
          className="absolute top-10 left-10 w-16 h-16 transition-opacity duration-500"
          style={currentAlbumData ? { opacity: 0 } : {}}
        />

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
