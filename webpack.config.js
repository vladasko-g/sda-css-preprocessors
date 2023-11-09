const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "development",
  entry: [__dirname + "/src/index.js"],
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          // extracts css files
          MiniCssExtractPlugin.loader,

          // Creates `style` nodes from JS strings (alternative to extracting css files)
          // "style-loader",

          // // Translates CSS into CommonJS
          "css-loader",

          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
    ],
  },
  plugins: [new MiniCssExtractPlugin({})],
};
