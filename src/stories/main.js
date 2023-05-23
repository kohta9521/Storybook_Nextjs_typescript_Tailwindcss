// .storybook/main.js
const path = require("path");

module.exports = {
  typescript: {
    reactDocgen: "react-docgen-typescript-plugin",
  },
  stories: [
    "../src/components/**/*.stories.mdx",
    "../src/components/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: "@storybook/react",
  core: {
    builder: "@storybook/builder-webpack5",
  },
  webpackFinal: async (config) => {
    // パスの@エイリアスの解決
    config.resolve.alias = {
      ...config.resolve.alias,
      "@": path.resolve(__dirname, "../src"),
    };

    // Tailwindの読み込み解決
    config.module.rules.push({
      test: /\.css$/,
      use: [
        {
          loader: "postcss-loader",
          options: {
            postcssOptions: {
              plugins: { tailwindcss: {}, autoprefixer: {} },
            },
          },
        },
      ],
      include: path.resolve(__dirname, "../"),
    });

    return config;
  },
};
