/* eslint-disable react/no-unknown-property */
import { motion } from "framer-motion-3d";
import PropTypes from "prop-types";
import { useRef } from "react";

const Cover = ({ position, size, image }) => {
  const meshRef = useRef();
  return (
    <motion.mesh
      ref={meshRef}
      position={position}
      onPointerEnter={() => console.log("hover " + image)}
      whileHover={{
        x: position[0] + 0.2,
        transition: {
          duration: 0.3,
          ease: "easeOut",
        },
      }}
      onPointerOver={(e) => {
        e.stopPropagation();
        document.body.style.cursor = "pointer";
      }}
      onPointerOut={(e) => {
        e.stopPropagation();
        document.body.style.cursor = "auto";
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
};

export default Cover;
