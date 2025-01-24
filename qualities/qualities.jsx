import React from "react";
import SectionHeader from "../section-header/sectionheader";

const Qualities = () => {
  return (
    <div>
      <SectionHeader
        heading="The most trusted cryptocurrency platform"
        description="Here are a few reasons why you should choose Coinbase"
      />
      <div className="qualities-section">
        <Badge
          name="Secure storage"
          description="We store the vast majority of the digital assets in secure offline storage."
          link="Learn how Coinbase keeps your funds safe and secure >"
          number={1}
        />
        <Badge
          name="Protected by insurance"
          description="Cryptocurrency stored on our servers is covered by our insurance policy."
          link="Learn how your crypto is covered by our insurance policy >"
          number={2}
        />
        <Badge
          name="Industry best practices"
          description="Coinbase supports a variety of the most popular digital currencies."
          link="Learn how we implement industry best practices for account security 
        $335B >"
        number={3}
        />
      </div>
      <style jsx>
        {`
              .qualities-section{
                display: flex;
                margin-top: 100px;
                flex-direction: row;
              }

              .

              `}
      </style>
    </div>
  );
};

const Badge = ({ name, description, number, link }) => {
  return (
    <div className="badge-container">
      {number === 1 ? <SecureIcon /> : number === 2 ? <InsuranceIcon /> : <ShieldIcon /> }
      <h2 className="badge-name">{name}</h2>
      <p className="badge-des">{description}</p>
      <a href="" className="badge-link">
        {link}
      </a>
      <style jsx>
        {`
          .badge-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 0px 24px;
            text-align: center;
          }

          .badge-name {
            margin-top: 72px;
            margin-bottom: 16px;
            font-size: 20px;
            font-weight: 500;
            color: rgb(10, 11, 13);
          }

          .badge-des {
            color: rgb(91, 97, 110);
            margin: 16px 24px;
            line-height: 24px;
            font-size: 16px;
          }

          .badge-link {
            color: rgb(22, 82, 240);
            cursor: pointer;
            font-size: 14px;
            font-weight: 500;
            text-decoration: none;
            transition: color 0.25s ease 0s;
          }
        `}
      </style>
    </div>
  );
};




function SecureIcon(props) {
  return (
    <svg width={64} height={64} viewBox="0 0 64 64" fill="none" {...props}>
      <path d="M56 0H8v50h48V0z" fill="#BFE9FF" />
      <path d="M64 10H0v48h64V10z" fill="#56B4FC" />
      <path d="M56 10H8v40h48V10z" fill="#1652F0" />
      <path d="M10 16H6v8h4v-8zm0 20H6v8h4v-8z" fill="#1652F0" />
      <path d="M64 58h-8v6h8v-6zM8 58H0v6h8v-6z" fill="#56B4FC" />
      <path
        d="M41.19 20.81c-5.07-5.07-13.32-5.07-18.38 0-5.06 5.07-5.07 13.32 0 18.38 2.53 2.53 5.86 3.8 9.19 3.8 3.33 0 6.66-1.27 9.19-3.8 5.07-5.07 5.07-13.31 0-18.38zM32 19c2.5 0 5 .85 7.04 2.55l-2.85 2.85A6.99 6.99 0 0032 23c-1.53 0-2.98.5-4.19 1.4l-2.85-2.85A11.03 11.03 0 0132 19zm3.54 14.54c-.95.94-2.2 1.46-3.54 1.46-1.34 0-2.59-.52-3.54-1.46A4.952 4.952 0 0127 30c0-1.33.52-2.59 1.46-3.54.94-.95 2.2-1.46 3.54-1.46 1.34 0 2.59.52 3.54 1.46.95.94 1.46 2.21 1.46 3.54s-.52 2.59-1.46 3.54zM23.55 22.96l2.85 2.85A6.99 6.99 0 0025 30c0 1.53.5 2.98 1.4 4.19l-2.85 2.85a11.018 11.018 0 010-14.08zm1.41 15.49l2.85-2.85a6.969 6.969 0 008.38 0l2.85 2.85a11.018 11.018 0 01-14.08 0zm15.49-1.41l-2.85-2.85c.9-1.2 1.4-2.65 1.4-4.19 0-1.53-.5-2.98-1.4-4.19l2.85-2.85a11.018 11.018 0 010 14.08z"
        fill="#fff"
      />
    </svg>
  )
}


function InsuranceIcon(props) {
  return (
    <svg width={64} height={64} viewBox="0 0 64 64" fill="none" {...props}>
      <path d="M56 56h-8v8h8c4.42 0 8-3.58 8-8h-8z" fill="#BFE9FF" />
      <path
        d="M48 56V0H0v56c0 4.42 3.58 8 8 8h48c-4.42 0-8-3.58-8-8z"
        fill="#56B4FC"
      />
      <path
        d="M48 56H0c0 4.42 3.58 8 8 8h48c-4.42 0-8-3.58-8-8z"
        fill="#1652F0"
      />
      <path
        d="M40 30H8v2h32v-2zm0 6H8v2h32v-2zm0 6H8v2h32v-2zm-8 6H16v2h16v-2zm-8.5-23.34l-3.24-5.92-5.92-3.24 5.92-3.24 3.24-5.92 3.24 5.92 5.92 3.24-5.92 3.24-3.24 5.92zm-4.99-9.16l3.22 1.76 1.76 3.22 1.76-3.22 3.22-1.76-3.22-1.76-1.76-3.22-1.76 3.22-3.22 1.76z"
        fill="#fff"
      />
    </svg>
  )
}


function ShieldIcon(props) {
  return (
    <svg width={56} height={64} viewBox="0 0 56 64" fill="none" {...props}>
      <path d="M56 0H24v64h32V0z" fill="#BFE9FF" />
      <path
        d="M0 8v28c0 13.25 24 24 24 24s24-10.75 24-24V8H0z"
        fill="#56B4FC"
      />
      <path d="M24 8v52s24-10.75 24-24V8H24z" fill="#1652F0" />
      <path
        d="M7 15v21c0 4.92 8.57 11.72 16.53 15.97l.47.25.47-.25C32.43 47.72 41 40.92 41 36V15H7zm32 2v6H9v-6h30zM24 49.95C15.55 45.35 9 39.28 9 36V25h30v11c0 3.28-6.55 9.35-15 13.95z"
        fill="#fff"
      />
    </svg>
  )
}



export default Qualities;
