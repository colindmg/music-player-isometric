import PropTypes from "prop-types";

const Cover = ({ position, size, image }) => {
  return (
    <mesh position={position}>
      <planeGeometry args={size} />
      <meshStandardMaterial color={image} />
    </mesh>
  );
};

Cover.propTypes = {
  position: PropTypes.arrayOf(PropTypes.number),
  size: PropTypes.arrayOf(PropTypes.number),
  image: PropTypes.string,
};

export default Cover;
