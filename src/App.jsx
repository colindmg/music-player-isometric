import { Canvas } from "@react-three/fiber";
import { useState } from "react";
import Scene from "./components/Scene";

function App() {
  const [currentAlbumData, setCurrentAlbumData] = useState(null);

  return (
    <>
      <div className="fixed w-screen h-screen top-0 left-0 bg-gray-50">
        <h1 className="absolute">{currentAlbumData?.image}</h1>
        <Canvas>
          <Scene
            setCurrentAlbumData={setCurrentAlbumData}
            currentAlbumData={currentAlbumData}
          />
        </Canvas>
      </div>

      <div className="h-[600vh]"></div>
    </>
  );
}

export default App;
