import React, {useContext, useState} from 'react';
import ShowPhoto from './ShowPhoto';
import { PhotoContext } from '../context/PhotoContextProvider';
import Loader from '../shared/Loader';
import styles from "./emojy.module.css"
const EmojyPhoto = () => {

    const [selectedItems, setSelectedItems] = useState([]);

    const emojyPhoto = useContext(PhotoContext);
   

    const clickHandler = () => {
        const dataCount = emojyPhoto.length;
        const randomIndex = Math.floor(Math.random() * dataCount);
        const randomData = emojyPhoto[randomIndex];
        setSelectedItems([...selectedItems, randomData]);
    };

    console.log(selectedItems);

    return (
        <div>
            <button onClick={clickHandler} className={styles.buttonPhoto}>Show Random Photo</button>
            {
                emojyPhoto.length ? 
                    selectedItems.map(photo => (
                        <ShowPhoto photo={photo}/>
                    ))
                    :
                    <Loader />
            }
        </div>
    );
};

export default EmojyPhoto;