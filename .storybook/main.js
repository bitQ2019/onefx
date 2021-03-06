module.exports = {
  stories: [
    "../packages/common-components/src/**/*.stories.@(js|jsx|ts|tsx)",
    "../packages/onefx-auth-provider/src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
  webpackFinal: async (config, { configType }) => {
    config.module.rules.push({
      test: /\.less$/,
      use: [
        "style-loader",
        "css-loader",
        {
          loader: "less-loader",
          options: {
            lessOptions: {
              javascriptEnabled: true
            },
            sourceMap: true
          }
        }
      ]
    });
    return config;
  }
};
