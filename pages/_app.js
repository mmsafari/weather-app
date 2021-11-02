import React from "react";
import "../styles/main.scss";
import Router from "next/router";
import NProgress from "nprogress";
import Head from "next/head";
import Aux from "../components/Auxilary";

function MyApp({ Component, pageProps }) {
  React.useEffect(() => {
    const start = () => NProgress.start();
    const end = () => NProgress.done();

    Router.events.on("routeChangeStart", start);
    Router.events.on("routeChangeComplete", end);
    Router.events.on("routeChangeError", end);

    return () => {
      Router.events.off("routeChangeStart", start);
      Router.events.off("routeChangeComplete", end);
      Router.events.off("routeChangeError", end);
    };
  }, []);
  return (
    <Aux>
      <Head>
        <title>Weather App</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="Check the current weather in any city"
        />
      </Head>

      <Component {...pageProps} />
    </Aux>
  );
}

export default MyApp;
