import React from "react";
import { InverseButton } from "../button/button";
import { Button } from "../button/button";

const Menuactions = () => {
  return (
    <div className="menuactions">
      <InverseButton name="sign Up" />
      <span className="btn-wrapper">
        <Button name="Get Started" />
      </span>

      <style jsx>
        {`
          .menuactions {
            display: flex;
            margin-left: 10px;
          }

          .btn-wrapper {
            margin: 15px 18px;
          }
        `}
      </style>
    </div>
  );
};

export default Menuactions;
