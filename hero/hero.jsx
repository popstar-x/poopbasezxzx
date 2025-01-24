import React, { useState } from "react";
import CTA from "../cta/cta";
import styles from "./styles.module.css";

const Hero = () => {
  const handleSubmit = () => {
    console.log("submited");
  };

  const [email, setEmail] = useState("");
  return (
    <section className="hero-container">
    <div className={styles.herowrapper}>
      <CTA />
      <h1 className="hero-title">
        <span cassName="hero-title-wrapper">Jump start your crypto portfolio</span>
      </h1>
        <h3 className="hero-subtitle">
          Coinbase is the easiest place to buy and sell cryptocurrency. Sign up
          and get started today.
        </h3>
        <div className="form-wrapper">
          <form onSubmit={handleSubmit} className="form">
            <div className="input-wrapper">
              <input
                className={styles.emailinput}
                type="email"
                name="email"
                id="email"
                value={email}
                placeholder="Email Address"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            <div>
              <button type="submit" className="submit-btn">
                {" "}
                Get started
              </button>
            </div>
          </form>
        </div>
      <style jsx>
        {`
          .hero-title {
            font-size: 62px;
            font-weight: 600;
            line-height: 1.15;
            margin-top: 8px;
            margin-bottom: 16px;
          }

          .hero-subtitle {
            font-size: 20px;
            font-weight: 500;
            line-height: 1.4;
            margin-bottom: 32px;
          }

          .submit-btn {
            position: relative;
            width: 100%;
            margin: 0px;
            margin-left: 12px;
            border-radius: 4px;
            color: rgb(255, 255, 255);
            transition: all 80ms ease-in-out 0s;
            padding: 24px;
            font-size: 16px;
            border: 1px solid rgb(0, 82, 255);;
            background: rgb(0, 82, 255);
          }

          .submit-btn:hover {
            cursor: pointer;
            background: rgb(22, 82, 240);
          }

          .form {
            display: flex;
            flex-direction: row;
            width: 100%;
          }

          .input-wrapper {
            display: flex;
            flex: 1 1 auto;
            flex-direction: row;
            position: relative;
            border-width: 1px;
            border-style: solid;
            border-color: rgb(236, 239, 241);
            border-radius: 4px;
            transition: all 0.15s ease 0s;
            background: rgb(255, 255, 255);
          }

          .form-wrapper{
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            min-width: 480px;
          }

          .hero-container{
            
          }

        //   input[type="email" i]:focus {
        //     outline: none;
        //    border: 2px  rgb(22, 82, 240) solid !important;
        // }

          @media (min-width: 768px){
            .hero-title{
              max-width: 425px;
            }
            
        }

        `}
      </style>
    </div>
    </section>
  );
};

export default Hero;
