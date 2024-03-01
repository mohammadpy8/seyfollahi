import React from "react";

///styles
import styles from "../styles/RandomImg.module.css";

const ColorChange = (props) => {
  const { setChangeColor, setResetColor, RandomImg } = props;

  const _changeColorHandle = () => {
    setChangeColor(true);
    setResetColor(false);
  };

  const _resetColorHandle = () => {
    setChangeColor(false);
    setResetColor(true);
  };

  return (
    <div>
      {!!RandomImg.length && (
        <div className={styles.buttonContainer}>
          <button onClick={_changeColorHandle} className={styles.changeColor}>
            change color
          </button>
          <button onClick={_resetColorHandle} className={styles.resetColor}>
            reset color
          </button>
        </div>
      )}
    </div>
  );
};

export default ColorChange;
