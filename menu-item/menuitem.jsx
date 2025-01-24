import React from "react";
import styles from "./styles.module.css";

const Menuitem = ({ name }) => {
  return (
    <div >
      <span className={styles.menuitem}>{name}</span>
    </div>
  );
};

export default Menuitem;

