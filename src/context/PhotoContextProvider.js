import React, { useState, useEffect } from 'react';
//Data
import { fetchData } from '../services/Api';
import { createContext } from 'react';

export const PhotoContext = createContext();

const PhotoContextProvider = ({children}) => {

    const [data, setData] = useState([]);
    

    useEffect(() => {

        const getData = async () => {

            setData(await fetchData());
        }

        getData();

    }, []);


    return (
        <PhotoContext.Provider value={data}>
            {children}
        </PhotoContext.Provider>
    );
};

export default PhotoContextProvider;