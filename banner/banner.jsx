import React from "react";
import styles from "./styles.module.css";

const image = [
  "https://static-assets.coinbase.com/earn/campaigns/polygon/asset-logo.svg",
  "https://static-assets.coinbase.com/earn/campaigns/skale/asset-logo.svg",
];

const Banner = ({ name, short, change, index }) => {
  return (
    <a href="" className={styles.bannerlink}>
      <div className={styles.bannercontainer}>
        <div className={styles.detailswrapper}>
          <img src={index % 2 != 0 ? image[0] : image[1]} alt="" srcset="" className={styles.image} />
          <h2 className={styles.name}>{name}</h2>
          <h3 className={styles.nameshort}>{short}</h3>
        </div>
        <div className={styles.changewrapper}>
          <div className={styles.change}>{change}</div>
        </div>
      </div>
    </a>
  );
};

export default Banner;
