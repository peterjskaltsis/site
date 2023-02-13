import "@tamagui/core/reset.css";
import "../misc/style.css";
import { NextThemeProvider, useRootTheme } from "@tamagui/next-theme";
import { AppProps } from "next/app";
import Head from "next/head";
import React, { startTransition, useMemo } from "react";
import { TamaguiProvider } from "@tamagui/core";
import config from "../tamagui.config";
import localFont from "@next/font/local";
import Script from "next/script";

// Font files can be colocated inside of `pages`
const generalSansFont = localFont({
  src: "./GeneralSans-Variable.woff2",
  variable: "--font-general-sans",
  style: "normal",
  display: "swap",
});

export default function App({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useRootTheme();

  // memo to avoid re-render on dark/light change
  const contents = useMemo(() => {
    return <Component {...pageProps} />;
  }, [pageProps]);

  return (
    <>
      <Script
        id="tamagui-animations-mount"
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
          // because we do our custom getCSS() in _app, we disableInjectCSS here
          disableInjectCSS
          disableRootThemeClass
          defaultTheme={theme}
        >
          <main className={generalSansFont.variable}>{contents}</main>
        </TamaguiProvider>
      </NextThemeProvider>
    </>
  );
}
