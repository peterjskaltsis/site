/** @type {import('next').NextConfig} */

const { withTamagui } = require("@tamagui/next-plugin");
// const withImages = require("next-images");
// const { join } = require("path");

process.env.IGNORE_TS_CONFIG_PATHS = "true";
process.env.TAMAGUI_TARGET = "web";
process.env.TAMAGUI_DISABLE_WARN_DYNAMIC_LOAD = "1";

module.exports = function (name, { defaultConfig }) {
  let config = {
    ...defaultConfig,
    i18n: {
      locales: ["en"],
      defaultLocale: "en",
    },
    // ...your configuration
  };

  const tamaguiPlugin = withTamagui({
    config: "./tamagui.config.ts",
    components: ["@tamagui/core"],
  });

  return {
    ...config,
    ...tamaguiPlugin(config),
  };
};
