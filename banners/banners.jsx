import React from "react";
import Banner from "../banner/banner";
import { earnData } from "../../data/earn";

const Banners = () => {
  return (
    <div className="banners-container">
      <div className="banners-wrapper">
        <div className="banners-fit">
          {earnData.map((item, index) => (
            <Banner name={item.name} short={item.short} change={item.earn}  index={index}/>
          ))}
        </div>
      </div>
      <style jsx>
        {`
          .banners-container {
            display: flex;
            justify-content: flex-end;
            flex-direction: row;
            flex: 1 1 50%;
            width: 100%;
          }


          .banners-wrapper {
            width: 100%;
          }

          .banners-fit {
            display: flex;
            justify-content: center;
            flex-direction: column;
            min-width: 500px;
            flex-grow: 1;
          }
        `}
      </style>
    </div>
  );
};

export default Banners;
