// .storybook/preview.js
import "../src/styles/globals.css";
import { initialize, mswDecorator } from "msw-storybook-addon";

initialize();

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
export const decorators = [mswDecorator];
