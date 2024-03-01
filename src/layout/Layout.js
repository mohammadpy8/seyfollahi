import React, { useContext, useState } from "react";

///components
import RandomImages from "../components/RandomImg";

///shared component
import SizeMagnifier from "../shared/SizeMagnifier";
import ColorChange from "../shared/ColorChange";

///context photo component
import { PhotoContext } from "../context/PhotoContextProvider";

///styles
import styles from "../styles/RandomImg.module.css";

const Layout = () => {
  const [changeColor, setChangeColor] = useState(false);
  const [resetColor, setResetColor] = useState(false);
  const [valueMagnifier, setValueMagnifier] = useState("");
  const RandomImg = useContext(PhotoContext);

  return (
    <div className={styles.appContainer}>
      <div>
        <RandomImages
          resetColor={resetColor}
          changeColor={changeColor}
          RandomImg={RandomImg}
          valueMagnifier={valueMagnifier}
        />
        <SizeMagnifier
          setValueMagnifier={setValueMagnifier}
          valueMagnifier={valueMagnifier}
          RandomImg={RandomImg}
        />
        <ColorChange
          setChangeColor={setChangeColor}
          setResetColor={setResetColor}
          resetColor={resetColor}
          changeColor={changeColor}
          RandomImg={RandomImg}
        />
      </div>
    </div>
  );
};

export default Layout;
