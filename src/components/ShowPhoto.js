import React from 'react';
import WaterMark from '../shared/WaterMark';
import styles from "./emojy.module.css";
// import Watermark from 'react-watermark-component';

const ShowPhoto = ({ image }) => {
    
    return (
        <div className={styles.img}>
            <WaterMark>
                <img src={image} />
            </WaterMark>
        </div>
        //     <Watermark
        //     image={image}
        //     text="My Photo"
        //     textSize={24}
        //     x={10}
        //     y={10}
        //     color="#ffffff"
        //     opacity={0.5}
        //   />
    );
};

export default ShowPhoto;