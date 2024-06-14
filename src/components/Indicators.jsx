// import { useScroll, useTransform } from "framer-motion";
// import { useEffect, useState } from "react";
// import coverListTest from "../data/coverListTest";

// const Indicators = () => {
//   const { scrollY } = useScroll();
//   const [scrollIndexValue, setScrollIndexValue] = useState(0);

//   const scrollIndex = useTransform(
//     scrollY,
//     [0, document.body.scrollHeight - window.innerHeight],
//     [0, coverListTest.length - 1]
//   );

//   useEffect(() => {
//     scrollIndex.on("change", (value) => {
//       setScrollIndexValue(Math.round(value));
//     });
//   }, [scrollIndex]);

//   return (
//     <div className="h-8 absolute bottom-10 right-10 flex items-center gap-1.5">
//       {coverListTest.map((cover, index) => (
//         <div
//           key={"Indicator " + index}
//           className={`w-[3px] h-5 bg-neutral-300 transition-all duration-100 ${
//             index === scrollIndexValue ? "bg-neutral-900 h-8" : ""
//           } ${
//             index === scrollIndexValue - 1 || index === scrollIndexValue + 1
//               ? "h-6 bg-neutral-600"
//               : ""
//           } ${
//             index === scrollIndexValue - 2 || index === scrollIndexValue + 2
//               ? "h-4 bg-neutral-400"
//               : ""
//           }
//           `}
//         ></div>
//       ))}
//     </div>
//   );
// };

// export default Indicators;

import { useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import coverListTest from "../data/coverListTest";

const Indicators = () => {
  const { scrollY } = useScroll();
  const [scrollIndexValue, setScrollIndexValue] = useState(0);

  const scrollIndex = useTransform(
    scrollY,
    [0, document.body.scrollHeight - window.innerHeight],
    [0, coverListTest.length - 1]
  );

  useEffect(() => {
    const unsubscribe = scrollY.onChange(() => {
      const newValue = Math.round(scrollIndex.get());
      if (newValue !== scrollIndexValue) {
        setScrollIndexValue(newValue);
      }
    });

    return () => unsubscribe();
  }, [scrollY, scrollIndex, scrollIndexValue]);

  return (
    <div className="h-8 absolute bottom-10 right-10 flex items-center gap-1.5">
      {coverListTest.map((cover, index) => (
        <div
          key={"Indicator " + index}
          className={`w-[3px] transition-all duration-100 ${
            index === scrollIndexValue
              ? "bg-neutral-900 h-8"
              : "bg-neutral-300 h-5"
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

export default Indicators;
