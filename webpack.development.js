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
    publicPath: '/',
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
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'static/images/',
            },
          },
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'static/fonts/',
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
    historyApiFallback: true,
    port: 9000,
  },
  watch: true,
  watchOptions: {
    ignored: ['build', 'dist', 'node_modules', 'public'],
  },
});
