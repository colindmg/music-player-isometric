import { OrbitControls, OrthographicCamera } from "@react-three/drei";
import { useRef } from "react";

/* eslint-disable react/no-unknown-property */
const Scene = () => {
  const cameraRef = useRef();

  return (
    <>
      <OrthographicCamera
        ref={cameraRef}
        makeDefault
        left={-2 * (window.innerWidth / window.innerHeight)}
        right={2 * (window.innerWidth / window.innerHeight)}
        top={2}
        bottom={-2}
        near={1}
        far={1000}
        position={[2, 2, 2]}
        rotation-order="YXZ"
        rotation-y={Math.PI / 4}
        rotation-x={Math.atan(-1 / Math.sqrt(2))}
      />
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 5, 10]} />

      <axesHelper args={[5]} />
      <OrbitControls camera={cameraRef.current} />
      <group>
        <mesh position={[1, 1, 0.5]}>
          <planeGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="green" />
        </mesh>

        <mesh position={[1, 1, 1]}>
          <planeGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="blue" />
        </mesh>

        <mesh position={[1, 1, 0]}>
          <planeGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="red" />
        </mesh>
      </group>
    </>
  );
};

export default Scene;
