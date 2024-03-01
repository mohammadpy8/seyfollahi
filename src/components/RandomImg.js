import React from "react";
import ShowPhoto from "./ShowPhoto";
import Loader from "../shared/Loader";

const RandomImg = ({ resetColor, changeColor, RandomImg, valueMagnifier }) => {
  console.log(RandomImg);

  return (
    <div>
      {RandomImg.length ? (
        <ShowPhoto
          image={RandomImg}
          changeColor={changeColor}
          resetColor={resetColor}
          valueMagnifier={valueMagnifier}
        />
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default RandomImg;
