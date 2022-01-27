import React, { Fragment } from "react";
import { AppProps } from "next/app";
import "tailwindcss/tailwind.css";
import ThemeProvider from "../hooks/useTheme";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default MyApp;
