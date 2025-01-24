import Head from "next/head";
import Banners from "../components/banners/banners";
import DataTable from "../components/data-table/datatable";
import Earn from "../components/earn-section/earn";
import Hero from "../components/hero/hero";
import Menubar from "../components/menubar/menubar";
import Moon from "../components/moon/moon";
import OnBoarding from "../components/onboarding/onboarding";
import Phone from "../components/phone/phone";
import Portfolio from "../components/portfolio-section/portfolio";
import Qualities from "../components/qualities/qualities";
import Stats from "../components/stats/stats";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>
          Coinbase – Buy & Sell Bitcoin, Ethereum, and more with trust
        </title>
        <link rel="icon" href="/static/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@100;200;300;400;500;600&display=swap"
          rel="stylesheet"
        ></link>
      </Head>

      <main>
        <Menubar />
        <hr />
        <section className="hero-sect-wrapper">
          <div className="hero-sect">
            <Hero />
            <Phone />
          </div>
        </section>
        <DataTable />

        <section className="banners-section">
          <Earn heading="Earn up to $28 worth of crypto " description="Discover how specific cryptocurrencies work — and get a bit of each
          crypto to try out for yourself." btn="Start earning" />
          <Banners />
        </section>

        <section className="portfolio-section">
          <Portfolio />
        </section>
        
        <section className="qualities">
          <Qualities />
        </section>
        <Stats />
        <section className="onboarding">
        <OnBoarding />
        </section>
        <Moon />
      </main>

      <footer></footer>

      <style jsx>{`
        .container {
        }

        hr {
          height: 0.2px;
          color: #ebebeb;
          margin: 0;
          opacity: 0.2;
        }

        .hero-sect {
          display: flex;
          align-items: center;
          flex-direction: row;
        }

        .hero-sect-wrapper{
          display: flex;
          flex-shrink: 0;
          width: 100%;
          margin: 0px auto;
          padding-top: 24px;
          padding-bottom: 24px;
          overflow: hidden;
          max-width: 1142px;
          padding-left: 56px;
          padding-right: 56px;
        }

        .banners-section{
          display: flex;
          flex-shrink: 0;
          width: 100%;
          max-width: 1180px;
          margin: 0px auto;
          padding: 24px;
        }

        .portfolio-section{
          display: flex;
          flex-shrink: 0;
          width: 100%;
          max-width: 1180px;
          margin: 0px auto;
          padding: 24px;
        }

        .qualities{
          display: flex;
          flex-shrink: 0;
          width: 100%;
          max-width: 1180px;
          margin: 0px auto;
          padding: 24px;
        }

        .onboarding{
          display: flex;
          flex-shrink: 0;
          width: 100%;
          max-width: 1180px;
          margin: 0px auto;
          padding: 24px;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: "Work Sans", sans-serif, -apple-system,
            BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell,
            Fira Sans, Droid Sans, Helvetica Neue;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
