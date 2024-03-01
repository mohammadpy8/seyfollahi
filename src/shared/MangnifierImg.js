import React from "react";

///magnifier package
import Magnifier from "react-magnifier";

const MangnifierImg = ({ SrcImg, className, valueMagnifier }) => {
  return (
    <Magnifier
      src={SrcImg}
      className={className}
      width={250}
      height={250}
      mgBorderWidth={5}
      mgWidth={100}
      mgHeight={100}
      zoomFactor={valueMagnifier.length ? valueMagnifier : 2}
    />
  );
};

export default MangnifierImg;
