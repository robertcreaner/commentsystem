const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
// const WebpackMd5Hash = require("webpack-md5-hash");
const StyleLintPlugin = require("stylelint-webpack-plugin");

module.exports = {
  entry: { main: "./src/index.js" },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[chunkhash].js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      },
      {
        test: /\.scss$/,
        use: [
          "style-loader",
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "sass-loader"
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      hash: true,
      template: "./src/index.html",
      filename: "./index.html"
    }), // compiles html into dist
    new CleanWebpackPlugin("dist", {}), // clears dist folder
    new MiniCssExtractPlugin({
      filename: "style.[contenthash].css"
    }), // compiles scss in dist
    // new WebpackMd5Hash() // fixes hash conflict
    new StyleLintPlugin({
      configFile: ".stylelintrc",
      context: "src",
      files: "**/*.scss",
      failOnError: false,
      quiet: false,
      syntax: "scss"
    })
  ]
};
