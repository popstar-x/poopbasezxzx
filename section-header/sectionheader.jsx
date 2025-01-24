import React from "react";
import styles from './styles.module.css'

const SectionHeader = ({heading, description}) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.sectionheading}>
          {heading}
      </h2>
      <p className={styles.sectionscription}>
          {description}
      </p>
    </div>
  );
};

export default SectionHeader;
