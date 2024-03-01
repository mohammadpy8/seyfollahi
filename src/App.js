import React, { useContext, useState } from "react";

///components
import RandomImages from "./components/RandomImg";

///shared components
import ColorChange from "./shared/ColorChange";

///context components
import { PhotoContext } from "./context/PhotoContextProvider";

///styles
import styles from "./styles/RandomImg.module.css";

function App() {
  const [changeColor, setChangeColor] = useState(false);
  const [resetColor, setResetColor] = useState(false);
  const RandomImg = useContext(PhotoContext);

  console.log({ resetColor, changeColor });

  return (
    <div className={styles.container}>
      <div className={styles.appContainer}>
        <div>
          <RandomImages
            resetColor={resetColor}
            changeColor={changeColor}
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
    </div>
  );
}

export default App;
