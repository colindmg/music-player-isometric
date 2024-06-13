/* eslint-disable react/no-unknown-property */
import { OrthographicCamera } from "@react-three/drei";
import { useRef } from "react";
import Cover from "./Cover";

const coverListTest = [
  "red",
  "green",
  "blue",
  "red",
  "green",
  "blue",
  "red",
  "green",
  "blue",
];

const Scene = () => {
  const cameraRef = useRef();

  const coverSize = [1, 1, 1];

  return (
    <>
      <OrthographicCamera
        ref={cameraRef}
        makeDefault
        left={-1.5 * (window.innerWidth / window.innerHeight)}
        right={1.5 * (window.innerWidth / window.innerHeight)}
        top={1.5}
        bottom={-1.5}
        near={1}
        far={100}
        position={[3, 4, 4]}
        rotation-order="YXZ"
        rotation-y={Math.PI / 5}
        rotation-x={Math.atan(-1 / Math.sqrt(2))}
      />
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 5, 10]} />

      <axesHelper args={[5]} />
      {/* <OrbitControls camera={cameraRef.current} /> */}
      <group>
        {coverListTest.map((color, index) => {
          const position = [0.5, 0.5, index * -0.4];
          const size = [1, 1, 1];
          return (
            <Cover
              position={position}
              size={size}
              image={color}
              key={index + color}
            />
          );
        })}
      </group>
    </>
  );
};

export default Scene;
