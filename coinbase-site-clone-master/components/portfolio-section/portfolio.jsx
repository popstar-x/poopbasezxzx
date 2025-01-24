import React from "react";
import Features from "../features/features";
import styles from "./styles.module.css";
import screenshot from "../../public/screenshot.jpg";
import SectionHeader from "../section-header/sectionheader";

const Portfolio = () => {
  return (
    <div className={styles.portfoliowrapper}>
      <SectionHeader
        heading="Create your cryptocurrency portfolio today"
        description="Coinbase has a variety of features that make it the best place to start
        trading"
      />
      <div className={styles.detailswrapper}>
        <Features />
        <div className={styles.imagewrapper}>
          <img src={screenshot} alt="" srcset="" className={styles.image} />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
