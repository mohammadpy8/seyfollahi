import React, {useContext, useState} from 'react';
import ShowPhoto from './ShowPhoto';
import { PhotoContext } from '../context/PhotoContextProvider';
import Loader from '../shared/Loader';
import styles from "./emojy.module.css";

const EmojyPhoto = () => {

    const [selectedItems, setSelectedItems] = useState([]);
    const [errorClickButton, setErrorClickButton] = useState(true);

    const emojyPhoto = useContext(PhotoContext);

    const clickHandler = () => {

        const dataCount = emojyPhoto.length;
        const randomIndex = Math.floor(Math.random() * dataCount);
        const randomData = emojyPhoto[randomIndex];
        setSelectedItems([randomData]);
        setErrorClickButton(false);

    };

    const clickDisableHandler = () => setErrorClickButton(false);

    console.log(selectedItems);

    return (
        <div>
            {
                emojyPhoto.length ?
                    <button onClick={clickHandler} className={styles.buttonPhoto}>Show Random Photo</button> :
                    <button className={styles.buttonPhoto} onClick={clickDisableHandler}>Show Random Photo</button>
            }
            {
                emojyPhoto.length ?
                    selectedItems.map((photo, index) => {
                        const { image } = photo;
                        return (
                            <ShowPhoto image={image} key={index} />
                        )
                    })
                    :
                    <Loader />
            }
            {
                emojyPhoto.length ? "" : <h1>button disable while api come in to Server</h1>
            }
            {
                emojyPhoto.length && errorClickButton && <h1>Now Click your Button And Random EmojyPhoto</h1>
            }
        </div>
    );
};

export default EmojyPhoto;