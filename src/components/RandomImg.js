import React from "react";
import ShowPhoto from "./ShowPhoto";
import Loader from "../shared/Loader";

const RandomImg = ({ resetColor, changeColor, RandomImg }) => {
  console.log(RandomImg);

  return (
    <div>
      {RandomImg.length ? (
        <ShowPhoto
          image={RandomImg}
          changeColor={changeColor}
          resetColor={resetColor}
        />
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default RandomImg;
