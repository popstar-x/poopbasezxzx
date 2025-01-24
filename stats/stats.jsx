import React from "react";
import styles from "./styles.module.css";

const Stats = () => {
  return (
    <div className={styles.statscontainer}>
      <section className={styles.statssection}>
          <Stat header="$335B" body="Quarterly volume traded" />
          <Stat header="100+" body="Countries supported" />
          <Stat header="56+M" body="Verified users" />
      </section>
    </div>
  );
};

const Stat = ({header, body}) => {
  return (
    <div className={styles.sectioncontainer}>
      <h2 className={styles.statsheader}>{header}</h2>
      <div className={styles.statsbody}>{body}</div>
    </div>
  );
};
export default Stats;
