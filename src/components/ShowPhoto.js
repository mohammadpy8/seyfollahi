import React from 'react';
import WaterMark from '../shared/WaterMark';
import styles from "./emojy.module.css";

const ShowPhoto = ({ image }) => {

    return (
        <div className={styles.img}>
            <WaterMark>
                <img src={image} className={styles.randomImg} />
            </WaterMark>
        </div>
    );
};

export default ShowPhoto;