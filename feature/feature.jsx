import React from "react";

const Feature = ({ title, description }) => {
  return (
    <div className="feature-wrapper">
      <div className="icon-wrapper">
        {title.includes("portfolio") ? (
          <BarChart />
        ) : title.includes("buys") ? (
          <Calender />
        ) : title.includes("protection") ? (
          <Lock />
        ) : (
          <Mobile />
        )}
      </div>
      <div className="feature-details">
        <h2 className="feature heading">{title}</h2>
        <p className="feature-description">{description}</p>
      </div>
      <style jsx>
        {`
          .icon-wrapper {
            // margin-top: -8px;
            flex-shrink: 0;
            width: 72px;
            height: 72px;
            margin-right: 32px;
            background-color: rgb(255, 255, 255);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: rgba(218, 225, 233, 0.557) 0px 8px 16px;
          }

          .feature-wrapper{
            display: flex;
            flex-direction: row;
            margin-bottom: 40px;
          }
          .feature-heading{
            margin-top: 0px;
            margin-bottom: 16px;
            font-size: 20px;
            font-weight: 500;
          }
          .feature-description{
            margin: 0px;
            line-height: 1.6;
            color: rgb(91, 97, 110);
          }
        `}
      </style>
    </div>
  );
};

function BarChart() {
  return (
    <svg width={30} height={32} viewBox="0 0 30 32">
      <g fill="none" fillRule="evenodd">
        <path fill="#D4EEFF" d="M10 32h10V10H10z" />
        <path fill="#1752F0" d="M20 32h10V0H20z" />
        <path fill="#55B4FC" d="M0 32h10V19H0z" />
      </g>
    </svg>
  );
}

function Calender() {
  return (
    <svg width={36} height={38} viewBox="0 0 36 38">
      <g fill="none" fillRule="evenodd">
        <path
          d="M17.813 9.5a2.375 2.375 0 002.375-2.375v-4.75a2.375 2.375 0 00-4.75 0v4.75A2.375 2.375 0 0017.811 9.5m11.877 0a2.375 2.375 0 002.375-2.375v-4.75a2.375 2.375 0 00-4.75 0v4.75A2.375 2.375 0 0029.688 9.5"
          fill="#D4EEFF"
        />
        <path fill="#D4EEFF" d="M0 38h35.625V4.75H0z" />
        <path fill="#55B4FC" d="M0 11.875h35.625V4.75H0z" />
        <path
          d="M5.938 9.5a2.375 2.375 0 002.375-2.375v-4.75a2.375 2.375 0 00-4.75 0v4.75A2.375 2.375 0 005.937 9.5"
          fill="#D4EEFF"
        />
        <path
          d="M27.313 4.75v2.375a2.375 2.375 0 004.75 0V4.75h-4.75zM5.938 9.5a2.375 2.375 0 002.375-2.375V4.75h-4.75v2.375A2.375 2.375 0 005.937 9.5"
          fill="#1752F0"
        />
        <path
          d="M17.813 9.5a2.375 2.375 0 002.375-2.375v-4.75a2.375 2.375 0 00-4.75 0v4.75A2.375 2.375 0 0017.811 9.5"
          fill="#D4EEFF"
        />
        <path
          d="M17.813 9.5a2.375 2.375 0 002.375-2.375V4.75h-4.75v2.375A2.375 2.375 0 0017.811 9.5"
          fill="#1752F0"
        />
        <path fill="#FFF" d="M4.75 34.438h26.125V11.875H4.75z" />
        <path
          fill="#1752F0"
          d="M12.69 26.329l3.359 3.359L26.125 19.61l-3.358-3.359z"
        />
        <path
          fill="#1752F0"
          d="M16.049 29.688l3.359-3.36-6.244-6.243-3.359 3.36z"
        />
      </g>
    </svg>
  );
}

function Lock() {
  return (
    <svg width={30} height={33} viewBox="0 0 30 33" fill="none">
      <path
        d="M15 0C9.106 0 4.284 4.64 4.284 11.344V25.78h21.429V11.344C25.714 4.64 20.892 0 14.999 0z"
        fill="#D4EEFF"
      />
      <path d="M30 12.375H0V33h30V12.375z" fill="#56B4FC" />
      <path d="M25.714 12.375H4.285v16.5h21.429v-16.5z" fill="#1652F0" />
      <path d="M15 18.563l2.84 6.187h-5.68L15 18.562z" fill="#fff" />
      <path
        d="M15 20.625c1.184 0 2.143-.923 2.143-2.063 0-1.139-.96-2.062-2.143-2.062-1.183 0-2.143.923-2.143 2.063 0 1.139.96 2.062 2.143 2.062z"
        fill="#fff"
      />
    </svg>
  );
}

function Mobile() {
  return (
    <svg width={36} height={36} viewBox="0 0 36 36" fill="none">
      <path d="M36 2.25H0v31.5h36V2.25z" fill="#D4EEFF" />
      <path
        d="M28.125 36H7.875a1.128 1.128 0 01-1.125-1.125V1.125C6.75.506 7.256 0 7.875 0h20.25c.618 0 1.125.506 1.125 1.125v33.75c0 .619-.507 1.125-1.125 1.125z"
        fill="#56B4FC"
      />
      <path d="M29.25 2.25H6.75v31.5h22.5V2.25z" fill="#1652F0" />
      <path
        d="M23 15.137L21.889 14l-6.667 6.822 1.11 1.137L23 15.137z"
        fill="#fff"
      />
      <path
        d="M16.334 22l1.11-1.137-3.333-3.411-1.11 1.137L16.333 22z"
        fill="#fff"
      />
      <path
        d="M23.625 3.375h-11.25a1.128 1.128 0 01-1.124-1.125V1.125h13.5V2.25c0 .619-.507 1.125-1.126 1.125z"
        fill="#56B4FC"
      />
      <path
        d="M15.75 32.063c0 .337.226.562.563.562h3.375c.338 0 .563-.225.563-.562 0-.338-.226-.563-.563-.563h-3.375c-.337 0-.562.225-.562.563z"
        fill="#fff"
      />
    </svg>
  );
}

export default Feature;
