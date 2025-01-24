import React from "react";
import { Button } from "../button/button";

const Earn = ({ heading, description, btn }) => {
  return (
    <div className="earn-container">
      <div className="earn-wrapper">
        <h2 className="earn-heading spacing">{heading}</h2>
        <p className="spacing earn-description">{description}</p>
        <a href="" className="link">
          <Button name={btn} menu={true}/>
        </a>
      </div>
      <style jsx>
        {`
          .earn-container {
            display: flex;
            justify-content: flex-start;
            flex-direction: row;
            flex: 1 1 50%;
            width: 100%;
          }

          .earn-wrapper {
            display: flex;
            flex-direction: column;
            max-width: 350px;
            justify-content: center;
            z-index: 1;
            min-width: 250px;
          }

          .link{
            color: rgba(17, 51, 83, 0.6);
            cursor: pointer;
            font-size: 16px;
            text-decoration: none;
            transition: color 0.25s ease 0s;
          }

          .earn-heading {
            line-height: 1.3;
            color: rgb(5, 15, 25);
            font-size: 35px;
            font-weight: 505;
            margin: 0;
          }

          .spcacing {
            display: block;
            margin: 0px 0px 16px;
          }

          .earn-description {
            font-size: 14px;
            line-height: 1.6;
            font-weight: 400;
            color: rgb(5, 15, 25);
          }
        `}
      </style>
    </div>
  );
};

export default Earn;
