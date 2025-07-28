const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  mode: "production",
  performance: {
    hints: "error",
    maxAssetSize: 1000000,
    assetFilter: function (assetFilename) {
      return !assetFilename.includes("JPEG");
    },
  },
  module: {
    rules: [
      {
        test: /\.scss$/i,
        use: [
          "style-loader", // Injects styles into DOM
          "css-loader", // Turns CSS into JS
          "sass-loader", // Compiles Sass to CSS
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|ico)$/i,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],
  devServer: {
    static: "./src",
    port: 3000,
    open: true,
    hot: true,
  },
};
