import Head from "next/head";
import { connect } from "react-redux";
import { Provider } from "react-redux";
import { useState, useEffect, useRef } from "react";

import theme from "@source/theme";
import { Header, Footer, styles } from ".";
import { setDeviceWidthAction } from "@store/actions";

const Layout = ({ pageProps, Component, store, setDeviceWidthAction }) => {
  useEffect(() => {
    setDeviceWidthAction(window.innerWidth);
  }, []);

  return (
    <>
      {" "}
      <Head>
        <title>AlienForest: Next.Js Starter</title>
        <link rel="manifest" href="/manifest.json" />
        <meta name="robots" content="index, follow" />
        <meta name="theme-color" content={theme.palette.primary.main} />
        <meta property="og:url" content="https://www.alienforest.com/" />
        <meta name="keywords" content="AlienForest, view" />
        <meta httpEquiv="Content-Type" content="text/html; charSet=utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="AlienForest: Transforming business" />
        <meta property="og:title" content="AlienForest" />
        <meta property="og:description" content="AlienForest: Transforming business" />
      </Head>
      <Provider store={store}>
        <div className={styles.layout}>
          <Header />
          <div>
            <Component {...pageProps} />
          </div>
          <Footer />
        </div>
      </Provider>
    </>
  );
};

const mapStateToProps = (state) => ({
    error: state.error,
  }),
  mapDispatchToProps = {
    setDeviceWidthAction,
  };

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
