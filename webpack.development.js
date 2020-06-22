const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');
const { parsed: localEnv } = require('dotenv').config({
  path: path.resolve(__dirname, '.env.development'),
});
const common = require('./webpack.common');

const environmentPlugin = new webpack.EnvironmentPlugin(localEnv);

module.exports = merge(common, {
  mode: 'development',
  devtool: 'source-map',
  output: {
    filename: 'static/js/[name].bundle.js',
    path: path.resolve(__dirname, 'build'),
  },
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        loader: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
    ],
  },
  plugins: [environmentPlugin],
  devServer: {
    contentBase: 'build',
    compress: true,
    port: 9000,
  },
  watch: true,
  watchOptions: {
    ignored: ['build', 'dist', 'node_modules', 'public'],
  },
});
