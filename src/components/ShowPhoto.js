import React from "react";

///shared componentes
import WaterMark from "../shared/WaterMark";
import MangnifierImg from "../shared/MangnifierImg";

///styles
import styles from "../styles/RandomImg.module.css";

const ShowPhoto = ({ image, resetColor, changeColor, valueMagnifier }) => {
  return (
    <div className={styles.img}>
      <WaterMark>
        <MangnifierImg
          SrcImg={`data:image/png;base64,${image}`}
          valueMagnifier={valueMagnifier}
          className={
            changeColor && !resetColor ? styles.randomImgGray : styles.randomImg
          }
        />
      </WaterMark>
    </div>
  );
};

export default ShowPhoto;
