import React from "react";

///shared componentes
import WaterMark from "../shared/WaterMark";
import MangnifierImg from "../shared/MangnifierImg";

///styles
import styles from "../styles/RandomImg.module.css";

const ShowPhoto = ({ image, resetColor, changeColor }) => {
  return (
    <div className={styles.img}>
      <WaterMark>
        <MangnifierImg
          SrcImg={`data:image/png;base64,${image}`}
          className={
            changeColor && !resetColor ? styles.randomImgGray : styles.randomImg
          }
        />
      </WaterMark>
    </div>
  );
};

export default ShowPhoto;
