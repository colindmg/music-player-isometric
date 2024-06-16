import { useScroll, useTransform } from "framer-motion";
import PropTypes from "prop-types";
import { useEffect, useLayoutEffect, useState } from "react";
import AlbumList from "../data/AlbumList";

const Indicators = ({ isHidden }) => {
  const { scrollY } = useScroll();
  const [scrollIndexValue, setScrollIndexValue] = useState(0);

  const [scrollHeight, setScrollHeight] = useState(0);
  const [innerHeight, setInnerHeight] = useState(0);

  useLayoutEffect(() => {
    const updateDimensions = () => {
      setScrollHeight(document.body.scrollHeight);
      setInnerHeight(window.innerHeight);
    };

    updateDimensions();

    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  const scrollIndex = useTransform(
    scrollY,
    [0, scrollHeight - innerHeight],
    [0, AlbumList.length - 1]
  );

  useEffect(() => {
    scrollIndex.on("change", (value) => {
      setScrollIndexValue(Math.round(value));
    });
  }, [scrollIndex]);

  return (
    <div
      className="h-8 absolute bottom-10 right-10 flex items-center gap-1.5 opacity-100 transition-opacity duration-500"
      style={isHidden ? { opacity: 0 } : {}}
    >
      {AlbumList.map((album, index) => (
        <div
          key={"Indicator for " + album.name}
          className={`w-[3px] h-5 rounded-full bg-neutral-300 transition-all duration-100 ${
            index === scrollIndexValue ? "bg-neutral-900 h-8" : ""
          } ${
            index === scrollIndexValue - 1 || index === scrollIndexValue + 1
              ? "h-6 bg-neutral-600"
              : ""
          } ${
            index === scrollIndexValue - 2 || index === scrollIndexValue + 2
              ? "h-4 bg-neutral-400"
              : ""
          }
          `}
        ></div>
      ))}
    </div>
  );
};

Indicators.propTypes = {
  isHidden: PropTypes.bool,
};

export default Indicators;
