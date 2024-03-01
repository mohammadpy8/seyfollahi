import React, { useState, useEffect, createContext } from "react";

///Data
import { FechingData } from "../services/Api";

export const PhotoContext = createContext();

const PhotoContextProvider = ({ children }) => {
  const [data, setData] = useState([]);
  console.log({ data });

  useEffect(() => {
    const getData = async () => {
      setData(await FechingData());
    };

    getData();
  }, []);

  return <PhotoContext.Provider value={data}>{children}</PhotoContext.Provider>;
};

export default PhotoContextProvider;
