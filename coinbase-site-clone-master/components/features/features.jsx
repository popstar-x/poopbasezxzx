import React from "react";
import Feature from "../feature/feature";
import {features} from "../../data/features"

const Features = () => {
  return (
    <div className="features-wrapper">
      {
          features.map((feature)=>(
            <Feature
            title={feature.name}
            description={feature.description}
          />
          ))
      }
      
      <style jsx>
        {`
          .features-wrapper {
            display: flex;
            flex-direction: column;
            flex: 1 1 0%;
          }
        `}
      </style>
    </div>
  );
};

export default Features;
