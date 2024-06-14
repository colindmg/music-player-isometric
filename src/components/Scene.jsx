/* eslint-disable react/no-unknown-property */
import { OrthographicCamera } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useScroll, useTransform } from "framer-motion";
import PropTypes from "prop-types";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import coverListTest from "../data/coverListTest";
import Cover from "./Cover";

const Scene = ({ setCurrentAlbumData, currentAlbumData }) => {
  const cameraRef = useRef();
  const { scrollY } = useScroll();

  const maxZ = (coverListTest.length - 1) * -0.4 + 4;
  const zValue = useTransform(
    scrollY,
    [0, document.body.scrollHeight - window.innerHeight],
    [4, maxZ]
  );

  // const { cameraX, cameraY, cameraZ } = useControls({
  //   cameraX: { value: 3, min: -2, max: 8, step: 0.1 },
  //   cameraY: { value: 4, min: -2, max: 8, step: 0.1 },
  //   cameraZ: { value: 4, min: -2, max: 8, step: 0.1 },
  // });
  const [cameraX, cameraY, cameraZ] = [3, 4, 4];

  useEffect(() => {
    return zValue.on("change", (latest) => {
      if (cameraRef.current && !currentAlbumData) {
        cameraRef.current.position.z = latest;
      }
    });
  }, [zValue, currentAlbumData]);

  // GÉRER LE RENDU OU NON DE TOUTES LES COVERS
  const [renderAllCovers, setRenderAllCovers] = useState(true);
  useEffect(() => {
    if (currentAlbumData) {
      setTimeout(() => {
        setRenderAllCovers(false);
      }, 500);
    } else {
      setRenderAllCovers(true);
    }
  }, [currentAlbumData]);

  // REMETTRE LA CAMÉRA À SA POSITION INITIALE SI IL Y A UN CURRENTALBUMDATA
  useFrame(() => {
    if (currentAlbumData && cameraRef.current) {
      // Smoothly interpolate the camera's position and rotation
      cameraRef.current.position.lerp(
        new THREE.Vector3(1.5, 0.5, currentAlbumData.position[2] + 2),
        0.1
      );
      cameraRef.current.rotation.x = THREE.MathUtils.lerp(
        cameraRef.current.rotation.x,
        0,
        0.06
      );
      cameraRef.current.rotation.y = THREE.MathUtils.lerp(
        cameraRef.current.rotation.y,
        0,
        0.06
      );
    }
  });

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
      />
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 5, 10]} />

      {/* <axesHelper args={[5]} /> */}
      {/* <OrbitControls camera={cameraRef.current} /> */}
      <group>
        {coverListTest.map((color, index) => {
          const position = [0.5, 0.5, index * -0.4];
          const size = [1, 1, 1];

          if (renderAllCovers) {
            return (
              <Cover
                isACoverClicked={currentAlbumData ? true : false}
                position={position}
                size={size}
                image={color}
                key={index + color}
                index={index}
                handleClick={setCurrentAlbumData}
              />
            );
          }

          return (
            currentAlbumData.index === index && (
              <Cover
                isACoverClicked={currentAlbumData ? true : false}
                position={position}
                size={size}
                image={color}
                key={index + color}
                index={index}
                handleClick={setCurrentAlbumData}
              />
            )
          );
        })}
      </group>
    </>
  );
};

Scene.propTypes = {
  setCurrentAlbumData: PropTypes.func,
  currentAlbumData: PropTypes.object,
};

export default Scene;
