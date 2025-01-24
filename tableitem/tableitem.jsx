import React, { useEffect, useRef, useState } from "react";
import ChangeChart from "../changechart/changechart";
import styles from "./styles.module.css";
import ethImg from "../../public/eth.png";
import btcImg from "../../public/btc.png";
import bchImg from "../../public/bch.png";
import ltcImg from "../../public/ltc.png";

const TableItem = ({ index, name, shortname, price, change }) => {
  let [image, setImage] = useState("");

  useEffect(() => {
    if (shortname == "btc") {
      setImage(btcImg);
    } else if (shortname == "eth") {
      setImage(ethImg);
    } else if (shortname == "bch") {
      setImage (bchImg);
    } else {
      setImage( ltcImg);
    }
  }, [shortname]);

  return (
    <tr className={styles.datarow}>
      <td className={styles.dataindex}>
        <div className={styles.indexwrapper}>
          <h4 className={styles.index}>{index + 1}</h4>
        </div>
      </td>

      <td className={styles.dataname}>
        <div className={styles.datanamewrapper}>
          <img src={image} alt={name} srcset="" className={styles.img} />
          <div className={styles.namewrapper}>
            <h4 className={styles.name}>{name}</h4>
            <h4 className={styles.name}>{shortname.toUpperCase()}</h4>
          </div>
        </div>
      </td>
      <td className={styles.dataprice}>
        <div className={styles.pricewrapper}>
          <h4 className={styles.index}>{`GHS ${price}`}</h4>
        </div>
      </td>
      <td className={styles.change}>
        <div className={styles.changewrapper}>
          <h4 className={styles.changevalue}>{change}</h4>
        </div>
      </td>
      <td className={styles.chart}>
        <ChangeChart />
      </td>
      <td className={styles.buy}>
        <a href="" className={styles.buywrapper}>
          <button className={styles.buybtn} type="submit">
            Buy
          </button>
        </a>
      </td>
    </tr>
  );
};

export default TableItem;
