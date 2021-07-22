const CracoLessPlugin = require("craco-less");
const path = require("path");
const resolve = dir => path.resolve(__dirname, dir);

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { '@primary-color': '#8ac6d1' },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
  webpack: {
    alias: {
      "@": resolve("src")
    }
  }
}