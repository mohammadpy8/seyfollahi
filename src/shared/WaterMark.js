import React, { useState } from "react";

///watermark package
import { Watermark } from "@hirohe/react-watermark";

///styles
import styles from "../styles/RandomImg.module.css";

const WaterMark = ({ children }) => {
  const [textWaterMark, setTextWaterMark] = useState("");

  const _changeWaterMarkerHandle = (event) =>
    setTextWaterMark(event.target.value);

  return (
    <div className={styles.waterMarkContainer}>
      <div className={styles.form}>
        <label>waterMark</label>
        <input
          type="text"
          name="watermark"
          value={textWaterMark}
          onChange={_changeWaterMarkerHandle}
          placeholder="text your mark"
        />
      </div>
      <div className={styles.waterMark}>
        <Watermark
          text={textWaterMark}
          textColor="#000"
          textSize={70}
          opacity={0.75}
        >
          {children}
        </Watermark>
      </div>
    </div>
  );
};

export default WaterMark;
