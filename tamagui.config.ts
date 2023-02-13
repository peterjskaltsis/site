import { config, createGenericFont } from "@tamagui/config-base";
import { createTamagui } from "@tamagui/core";

const systemFamily =
  process.env.TAMAGUI_TARGET === "native"
    ? "General Sans Variable"
    : 'var(--font-general-sans), -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"';

const bodyFont = createGenericFont(systemFamily, {
  weight: {
    1: "400",
    7: "600",
  },
});

const tamaConf = createTamagui({
  ...config,
  fonts: {
    ...config.fonts,
    heading: bodyFont,
    body: bodyFont,
  },
});

export type Conf = typeof tamaConf;

declare module "@tamagui/core" {
  interface TamaguiCustomConfig extends Conf {}
}

export default tamaConf;
