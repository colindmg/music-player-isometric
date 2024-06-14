import { Canvas } from "@react-three/fiber";
import { useState } from "react";
import Indicators from "./components/Indicators";
import Scene from "./components/Scene";

function App() {
  const [currentAlbumData, setCurrentAlbumData] = useState(null);

  return (
    <>
      <div className="fixed w-screen h-screen top-0 left-0 bg-gray-50">
        <Canvas>
          <Scene
            setCurrentAlbumData={setCurrentAlbumData}
            currentAlbumData={currentAlbumData}
          />
        </Canvas>

        {/* INDICATEURS */}
        <Indicators isHidden={currentAlbumData ? true : false} />

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

        {/* DEBUG */}
        <h1 className="absolute">{currentAlbumData?.image}</h1>
      </div>

      {/* TAILLE DU SCROLL */}
      <div className="h-[600vh]"></div>
    </>
  );
}

export default App;
