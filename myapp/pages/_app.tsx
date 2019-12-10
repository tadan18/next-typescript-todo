import React from "react";
import App from "next/app";
import { Provider } from "react-redux";
import withRedux from "next-redux-wrapper";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "../src/theme";
import { initStore } from "../store";

type Props = {
  store: any
}

export default withRedux(initStore)((class MyApp extends App<Props> {
  static async getInitialProps ({Component, ctx}: any ) {
    return {
      pageProps: (Component.getInitialProps ? await Component.getInitialProps(ctx): {})
    }
  }

  render() {
    const { Component, pageProps, store } = this.props;

    return (
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </Provider>
    )
  }
}))