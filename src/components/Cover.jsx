/* eslint-disable react/no-unknown-property */
import { motion } from "framer-motion-3d";
import PropTypes from "prop-types";
import { useRef } from "react";

const Cover = ({ position, size, image, handleClick, index }) => {
  const meshRef = useRef();

  const albumData = {
    index,
    position,
    image,
  };

  return (
    <motion.mesh
      ref={meshRef}
      position={position}
      whileHover={{
        x: position[0] + 0.2,
        transition: {
          duration: 0.3,
          ease: "easeOut",
        },
      }}
      onPointerEnter={(e) => {
        e.stopPropagation();
        document.body.style.cursor = "pointer";
      }}
      onPointerOut={(e) => {
        e.stopPropagation();
        document.body.style.cursor = "auto";
      }}
      onPointerDown={(e) => {
        e.stopPropagation();
        console.log("click " + image);
        handleClick(albumData);
      }}
    >
      <planeGeometry args={size} />
      <meshStandardMaterial color={image} />
    </motion.mesh>
  );
};

Cover.propTypes = {
  position: PropTypes.arrayOf(PropTypes.number),
  size: PropTypes.arrayOf(PropTypes.number),
  image: PropTypes.string,
  index: PropTypes.number,
  handleClick: PropTypes.func,
};

export default Cover;
