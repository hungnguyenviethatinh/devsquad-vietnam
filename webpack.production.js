const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');
const { parsed: prodEnv } = require('dotenv').config({
  path: path.resolve(__dirname, '.env.production'),
});
const common = require('./webpack.common');

const environmentPlugin = new webpack.EnvironmentPlugin(prodEnv);
const miniCssExtractPlugin = new MiniCssExtractPlugin({
  filename: 'static/css/[contenthash].min.css',
});

module.exports = merge(common, {
  mode: 'production',
  output: {
    filename: 'static/js/[contenthash].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        loader: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
    ],
  },
  plugins: [environmentPlugin, miniCssExtractPlugin],
});
