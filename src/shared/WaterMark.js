import React from 'react';
import { Watermark } from '@hirohe/react-watermark';
import { useState } from 'react';
import styles from "../components/emojy.module.css";

const WaterMark = ({ children }) => {

    const [textWaterMark, setTextWaterMark] = useState("");

    const changeHandler = (event) => setTextWaterMark(event.target.value);

    return (
        <div>
            <div className={styles.form}>
                <label>:Type your Mark</label>
                <input
                    type='text'
                    name="watermark"
                    value={textWaterMark}
                    onChange={changeHandler}
                    placeholder='text your mark' />
            </div>
            <div className={styles.waterMark}>
                <Watermark
                    text={textWaterMark}
                    textColor='red'
                    textSize={100}
                >
                    {children}
                </Watermark>
            </div>
        </div>
    );
};

export default WaterMark;