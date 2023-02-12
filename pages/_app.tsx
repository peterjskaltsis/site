import "@tamagui/core/reset.css";
import "../style.css";
import { NextThemeProvider, useRootTheme } from "@tamagui/next-theme";
import { AppProps } from "next/app";
import Head from "next/head";
import React, { startTransition, useMemo, useState } from "react";
import { TamaguiProvider } from "@tamagui/core";

import config from "../tamagui.config";

import localFont from "@next/font/local";

// Font files can be colocated inside of `pages`
const myFont = localFont({
  src: "../GeneralSans-Variable.woff2",
  variable: "--font-general-sans",
  weight: "375",
  style: "normal",
  display: "swap",
});

export default function App({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useRootTheme();

  // memo to avoid re-render on dark/light change
  const contents = useMemo(() => {
    return <Component {...pageProps} />;
  }, [pageProps]);

  // because we do our custom getCSS() above, we disableInjectCSS here
  return (
    <>
      <Head>{/* ... */}</Head>

      <script
        key="tamagui-animations-mount"
        type="text/javascript"
        dangerouslySetInnerHTML={{
          // avoid flash of animated things on enter
          __html: `document.documentElement.classList.add('t_unmounted')`,
        }}
      />

      <NextThemeProvider
        onChangeTheme={(next) => {
          startTransition(() => {
            setTheme(next);
          });
        }}
      >
        <TamaguiProvider
          config={config}
          disableInjectCSS
          // disableRootThemeClass

          defaultTheme={theme}
        >
          <main className={myFont.variable}>{contents}</main>
        </TamaguiProvider>
      </NextThemeProvider>
    </>
  );
}
