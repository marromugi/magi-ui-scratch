import type { StorybookConfig } from "@storybook/react-vite";
const path = require("path");
const { loadConfigFromFile, mergeConfig } = require("vite");

const config: StorybookConfig = {
  stories: [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  async viteFinal(config, { configType }) {
    console.log(path.resolve(__dirname, "../vitest.config.ts"));
    const userConfig = await loadConfigFromFile(
      path.resolve(__dirname, "../vitest.config.ts"),
    );

    return mergeConfig(config, {
      ...userConfig,
      // manually specify plugins to avoid conflict
      plugins: [],
      resolve: {
        alias: [
          {
            find: "@",
            replacement: path.resolve(__dirname, "../src"),
          },
        ],
      },
    });
  },
};
export default config;
