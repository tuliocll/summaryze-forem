import { useState } from "react";
import Head from "next/head";
import fetch from "node-fetch";
import { ToastContainer, toast } from "react-toastify";
import ReactTooltip from "react-tooltip";

import HomeContainer from "../components/HomeContainer";
import HowToUseContainer from "../components/HowToUseContainer";
import FooterContainer from "../components/FooterContainer";

import Navbar from "../components/Nav";
import SearchBar from "../components/SearchBar";
import Tabs from "../components/Tabs";

export default function Home() {
  const [sumary, setSummary] = useState([]);
  const [isFetching, setIsFetching] = useState(false);

  async function handleClick(url) {
    if (!url) {
      toast("Please provide a url!", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        type: "error",
      });
      return;
    }
    setIsFetching(true);

    try {
      const response = await fetch(`/api/summary?url=${url}`);
      const body = await response.json();
      if (response.status === 400) {
        toast(body.error, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          type: "error",
        });
        setIsFetching(false);
        return;
      }

      setSummary(body.sumary);
      setIsFetching(false);
    } catch (_) {
      toast("Error on request, check your url and try again", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        type: "error",
      });
      setIsFetching(false);
    }
  }

  return (
    <div style={{ height: "100%" }}>
      <Head>
        <title>Summaryze Forem 🌱</title>
        <link rel="icon" href="/favicon.ico" />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-7CEV0QT3Y5"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
  
    gtag('config', 'G-7CEV0QT3Y5');
    `,
          }}
        ></script>
      </Head>
      <ReactTooltip type="info" place="top" effect="solid" />
      <Navbar />
      <HomeContainer />
      <div className="container">
        <SearchBar onClick={handleClick} />
        <Tabs markdown={sumary} isFetching={isFetching} />
      </div>
      <HowToUseContainer />
      <FooterContainer />
      <ToastContainer />
    </div>
  );
}
