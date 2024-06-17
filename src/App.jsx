import { Canvas } from "@react-three/fiber";
import { useEffect, useState } from "react";
import AlbumDetails from "./components/AlbumDetails";
import HoveredAlbumInfos from "./components/HoveredAlbumInfos";
import Indicators from "./components/Indicators";
import Scene from "./components/Scene";

function App() {
  const [currentAlbumData, setCurrentAlbumData] = useState(null);
  const [hoveredAlbumData, setHoveredAlbumData] = useState(null);

  useEffect(() => {
    console.log(hoveredAlbumData);
  }, [hoveredAlbumData]);

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
