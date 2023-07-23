import React from 'react';
import { Watermark } from '@hirohe/react-watermark';
import { useState } from 'react';
import styles from "../components/emojy.module.css";

const WaterMark = ({ children }) => {

    const [textWaterMark, setTextWaterMark] = useState("");

    const changeHandler = (event) => {

        setTextWaterMark(event.target.value);

    };
    
    return (
        <div >
            <Watermark text={textWaterMark}>
                <div className={styles.form}>
                    <label>:Type your Mark</label>
                    <input
                        type='text'
                        name="watermark"
                        value={textWaterMark}
                        onChange={changeHandler}
                        placeholder='text your mark' />
                </div>
                <div style={{ width: 100, height: 100, color: "#000", borderRadius: "50%" }}>
                    {children}
                </div>
            </Watermark>
        </div>
    );
};

export default WaterMark;