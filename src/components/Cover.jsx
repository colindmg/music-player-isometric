/* eslint-disable react/no-unknown-property */
import { useLoader } from "@react-three/fiber";
import { motion } from "framer-motion-3d";
import PropTypes from "prop-types";
import { useRef, useState } from "react";
import { TextureLoader } from "three";

const Cover = ({
  position,
  size,
  album,
  handleClick,
  handleHover,
  index,
  isACoverClicked,
}) => {
  const meshRef = useRef();
  const [isClicked, setIsClicked] = useState(false);
  const texture = useLoader(TextureLoader, album.cover);

  const albumData = {
    ...album,
    index,
    position,
  };

  return (
    <motion.mesh
      ref={meshRef}
      position={position}
      whileHover={{
        x: isClicked ? position[0] : position[0] + 0.2,
        transition: {
          duration: 0.3,
          ease: "easeOut",
        },
      }}
      animate={{
        scale: isClicked ? 2 : 1,
        transition: {
          duration: 1,
          ease: "easeOut",
        },
      }}
      onPointerEnter={(e) => {
        e.stopPropagation();
        !isClicked ? (document.body.style.cursor = "pointer") : null;
        handleHover(albumData);
      }}
      onPointerOut={(e) => {
        e.stopPropagation();
        document.body.style.cursor = "auto";
        handleHover(null);
      }}
      onPointerDown={(e) => {
        e.stopPropagation();
        setIsClicked(true);
        handleClick(albumData);
      }}
    >
      <planeGeometry args={size} />
      <motion.meshStandardMaterial
        // color={image}
        map={texture}
        transparent
        animate={{
          opacity: isACoverClicked && !isClicked ? 0 : isClicked ? 1 : 0.95,
          transition: { duration: 0.5, ease: "easeOut" },
        }}
      />
    </motion.mesh>
  );
};

Cover.propTypes = {
  position: PropTypes.arrayOf(PropTypes.number),
  size: PropTypes.arrayOf(PropTypes.number),
  image: PropTypes.string,
  index: PropTypes.number,
  handleClick: PropTypes.func,
  handleHover: PropTypes.func,
  album: PropTypes.object,
  isACoverClicked: PropTypes.bool,
};

export default Cover;
