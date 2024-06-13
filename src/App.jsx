import { Canvas } from "@react-three/fiber";
import Scene from "./components/Scene";

function App() {
  return (
    <>
      <div className="fixed w-screen h-screen top-0 left-0 bg-gray-50">
        <Canvas>
          <Scene />
        </Canvas>
      </div>

      <div className="h-[300vh]"></div>
    </>
  );
}

export default App;
