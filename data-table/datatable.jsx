import React from "react";
import TableItem from "../tableitem/tableitem";
import styles from "./styles.module.css";
import { tableData } from "../../data/table";

const DataTable = () => {
  return (
    <section className={styles.tablesection}>
      <div className={styles.tablewrapper}>
        <table className={styles.datatable}>
          <thead>
            <tr className={styles.tablehead}>
              <th>
                <div className={styles.headeritem}>
                  <label htmlFor="" className="number">
                    #
                  </label>
                </div>
              </th>
              <th>
                <div className={styles.headeritem}>
                  <label htmlFor="" className={styles.label}>
                    Name
                  </label>
                </div>
              </th>
              <th>
                <div className={styles.headeritem}>
                  <label htmlFor="" className={styles.label}>
                    Price
                  </label>
                </div>
              </th>
              <th>
                <div className={styles.headeritem}>
                  <label htmlFor="" className={styles.label}>
                    Change
                  </label>
                </div>
              </th>
              <th>
                <div className={styles.headeritem}>
                  <label htmlFor="" className={styles.label}>
                    Chart
                  </label>
                </div>
              </th>
              <th>
                <div className={styles.headeritem}>
                  <label htmlFor="" className={styles.label}>
                    Trade
                  </label>
                </div>
              </th>
            </tr>
          </thead>
          <tbody className={styles.databody}>
            {tableData.map((item, index) => (
              <TableItem
                name={item.name}
                shortname={item.shortname}
                price={item.price}
                index={index}
                change={item.change}
              />
            ))}
          </tbody>
        </table>
      </div>
      <style jsx>
        {`
          .number {
            padding-left: 32px;
            width: auto;
            font-weight: 400;
            white-space: nowrap;
            font-size: 14px;
            font-weight: 500;
            line-height: 1.6;
            color: rgba(17, 51, 83, 0.6);
            transition: color 80ms ease-in-out 0s;
          }
        `}
      </style>
    </section>
  );
};

export default DataTable;
