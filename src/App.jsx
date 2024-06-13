import { Canvas } from "@react-three/fiber";
import Scene from "./components/Scene";

function App() {
  return (
    <>
      <div className="fixed w-screen h-screen top-0 left-0">
        <Canvas>
          <Scene />
        </Canvas>
      </div>
    </>
  );
}

export default App;
