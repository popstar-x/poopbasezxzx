import React from "react";

export const Button = ({ name }) => {
  // let margin = ';'
  // if (menu === true) {
  //   margin = '15px 18px'
  // }

  return (
    <div>
      <button className="btn">{name}</button>
      <style jsx>
        {`
          .btn {
            color: white;
            background: rgb(0, 82, 255);
            border: none;
            font-family: "Work Sans", sans-serif;
            display: inline-flex;
            align-items: center;
            position: relative;
            cursor: pointer;
            font-size: 14px;
            font-weight: 500;
            line-height: 26px;
            text-align: center;
            padding: 5px 15px;
            border-radius: 5px;
          }

          .btn:hover {
            cursor: pointer;
            background: rgb(22, 82, 240);
          }

        `}
      </style>
    </div>
  );
};

export const InverseButton = ({ name }) => {
  return (
    <div>
      <button className="btn">{name}</button>
      <style jsx>{`
        .btn {
          color: rgb(0, 82, 255);
          background: transparent;
          border: none;
          font-family: "Work Sans", sans-serif;
          margin: 0px 18px;
          display: inline-flex;
          align-items: center;
          position: relative;
          cursor: pointer;
          font-size: 14px;
          font-weight: 500;
          line-height: 26px;
          text-align: center;
          padding: 20px 0;
        }

        .btn:hover {
          cursor: pointer;
          color: rgb(22, 82, 240);
          };
        }
      `}</style>
    </div>
  );
};

//trying to find way to render style based on props, nothing is working so I'm spliting button into two groups
