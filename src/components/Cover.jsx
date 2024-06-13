import { motion } from "framer-motion-3d";
import PropTypes from "prop-types";

const Cover = ({ position, size, image }) => {
  return (
    <motion.mesh
      position={position}
      whileHover={{
        x: position[0] + 0.3,
        transition: {
          duration: 0.3,
          ease: "easeOut",
        },
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
