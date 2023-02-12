import { createSiteFont } from "./utils";
import { config } from "@tamagui/config-base";
import { createTamagui } from "@tamagui/core";

const systemFamily =
  process.env.TAMAGUI_TARGET === "native"
    ? "General Sans Variable"
    : 'var(--font-general-sans), -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"';

const bodyFont = createSiteFont(
  {
    family: systemFamily,
    weight: {
      1: "400",
      7: "600",
    },
  },
  {
    sizeSize: (size) => Math.round(size),
    sizeLineHeight: (size) => Math.round(size * 1.1 + (size >= 12 ? 8 : 4)),
  }
);

const tamaConf = createTamagui({
  ...config,
  fonts: {
    ...config.fonts,
    heading: bodyFont,
    body: bodyFont,
  },
  // themes: config.themes,
  // fonts: config.fonts,
  // tokens: config.tokens,
  // animations: config.animations,
  // reactNative: false,
  // shouldAddPrefersColorThemes: true,
  // themeClassNameOnRoot: true,
  // media: config.media,
});

export type Conf = typeof tamaConf;

declare module "@tamagui/core" {
  interface TamaguiCustomConfig extends Conf {}
}

export default tamaConf;
