import React from "react";

///styls
import styles from "../styles/RandomImg.module.css";

const SizeMagnifier = ({ valueMagnifier, setValueMagnifier, RandomImg }) => {
  const _changeValueMagnifierHandle = (e) => setValueMagnifier(e.target.value);
  console.log({ valueMagnifier });
  return (
    <div>
      {!!RandomImg.length && (
        <div className={styles.magnifierContainer}>
          <label>size of magnifier</label>
          <select value={valueMagnifier} onChange={_changeValueMagnifierHandle}>
            <option value="">size of magnifier</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
        </div>
      )}
    </div>
  );
};

export default SizeMagnifier;
