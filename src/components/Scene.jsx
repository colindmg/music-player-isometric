/* eslint-disable react/no-unknown-property */
import { OrthographicCamera } from "@react-three/drei";
import { useScroll, useTransform } from "framer-motion";
import { useControls } from "leva";
import { useEffect, useRef } from "react";
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
  const { scrollY } = useScroll();

  const maxZ = (coverListTest.length - 1) * -0.4 + 4;
  const zValue = useTransform(
    scrollY,
    [0, document.body.scrollHeight - window.innerHeight],
    [4, maxZ]
  );

  const { cameraX, cameraY, cameraZ, cameraRotationX, cameraRotationY } =
    useControls({
      cameraX: { value: 3, min: -2, max: 8, step: 0.1 },
      cameraY: { value: 4, min: -2, max: 8, step: 0.1 },
      cameraZ: { value: 4, min: -2, max: 8, step: 0.1 },

      cameraRotationX: { value: 0, min: -Math.PI, max: Math.PI, step: 0.1 },
      cameraRotationY: { value: 0, min: -Math.PI, max: Math.PI, step: 0.1 },
    });

  useEffect(() => {
    return zValue.on("change", (latest) => {
      if (cameraRef.current) {
        cameraRef.current.position.z = latest;
      }
    });
  }, [zValue]);

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
        position={[cameraX, cameraY, cameraZ]}
        rotation-order="YXZ"
        rotation-y={Math.PI / 5}
        rotation-x={Math.atan(-1 / Math.sqrt(2))}
        // rotation-x={cameraRotationX}
        // rotation-y={cameraRotationY}
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
