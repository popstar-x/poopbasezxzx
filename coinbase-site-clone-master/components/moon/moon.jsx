import React from "react";
import Earn from "../earn-section/earn";
import moon from "../../public/mooncrypto.jpg"

const Moon = () => {
  return (
    <section className="moon-section">
      <div className="earn-container">
        <Earn
          heading="Earn up to $31 worth of crypto"
          description="Discover how specific cryptocurrencies work — and get a bit of each crypto to try out for yourself."
          btn="Start earning"
        />
      </div>
      <div className="moon-img-wrapper">
        <div className="moon-img-container">
            <img src={moon} alt="moon" srcset="" />
        </div>
      </div>
      <style jsx>
        {`
          .moon-section {
            display: flex;
            flex-direction: row;
            flex: 1 0 auto;
            position: relative;
            background-color: rgb(233, 246, 255);
            height: 460px;
            width: 100%;
            overflow: hidden;
          }

          .moon-img-wrapper{
            display: flex;
            justify-content: center;
            flex-direction: row;
            flex: 1 1 50%;
            width: 100%;
          }

          .moon-img-container{
            display: flex;
            flex-direction: row;
            align-self: flex-end;
            position: absolute;
            right: 0px;
            top: 0px;
            width: 65%;
            max-width: 750px;
            height: auto;
          }

          .img{
              width: 100%;
          }

          .earn-container{
            display: flex;
            flex-shrink: 0;
            width: 100%;
            max-width: 1180px;
            margin: 0px auto;
            padding: 24px;
          }
        `}
      </style>
    </section>
  );
};

export default Moon;
