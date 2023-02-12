import NextDocument, { Head, Html, Main, NextScript } from "next/document";
import { Children } from "react";
import Script from "next/script";

// import { AppRegistry } from "react-native";

import Tamagui from "../tamagui.config";

export default class Document extends NextDocument {
  static async getInitialProps({ renderPage }: any) {
    // If you are just using core, or aren't using Image or Input in tamagui, you can forego the entire AppRegistry import and setup here
    // AppRegistry.registerComponent("Main", () => Main);
    const page = await renderPage();
    // @ts-ignore
    // const { getStyleElement } = AppRegistry.getApplication("Main");
    const styles = [
      // getStyleElement(),
      <style key={2} dangerouslySetInnerHTML={{ __html: Tamagui.getCSS() }} />,
    ];
    return { ...page, styles: Children.toArray(styles) };
  }

  render() {
    return (
      <Html>
        <Head></Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
