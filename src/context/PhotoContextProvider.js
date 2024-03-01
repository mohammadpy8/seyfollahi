import React, { useState, useEffect, createContext } from "react";

///Data
import { fetchData } from "../services/Api";

export const PhotoContext = createContext();

const PhotoContextProvider = ({ children }) => {
  const [data, setData] = useState([]);
  console.log({ data });

  useEffect(() => {
    const getData = async () => {
      setData(await fetchData());
    };

    getData();
  }, []);

  return <PhotoContext.Provider value={data}>{children}</PhotoContext.Provider>;
};

export default PhotoContextProvider;
