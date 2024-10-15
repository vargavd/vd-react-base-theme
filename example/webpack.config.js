
require("dotenv").config({});

const path = require('path');
module.exports = {
  entry: './src/index.tsx',
  mode: "development",
  module: {
    rules: [
      {
        test: /\.png$/,
        use: {
          loader: 'url-loader'
        }
      },
      {
        test: /\.(tsx|ts|js)$/,
        loader: "string-replace-loader",
        options: {
          search: /MAPBOX_ACCESS_TOKEN/g,
          replace: process.env.MAPBOX_ACCESS_TOKEN,
        },
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader"
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};