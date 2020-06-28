const HtmlWebPackPlugin = require('html-webpack-plugin');
const CopyWebPackPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const htmlWebpackPlugin = new HtmlWebPackPlugin({
  template: 'public/index.html',
  filename: 'index.html',
  chunks: ['react', 'redux', 'main'],
});
const cleanWebpackPlugin = new CleanWebpackPlugin();
const copyWebPackPlugin = new CopyWebPackPlugin({
  patterns: [
    { from: 'public/favicon.ico', to: 'favicon.ico', toType: 'file' },
    { from: 'public/manifest.json', to: 'manifest.json', toType: 'file' },
  ],
});

module.exports = {
  entry: {
    main: './src/index.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  plugins: [cleanWebpackPlugin, copyWebPackPlugin, htmlWebpackPlugin],
  optimization: {
    splitChunks: {
      cacheGroups: {
        react: {
          test: /[\\/]node_modules[\\/](react|react-dom|react-router-dom)[\\/]/,
          name: 'react',
          chunks: 'all',
        },
        redux: {
          test: /[\\/]node_modules[\\/](react-redux|redux|redux-thunk)[\\/]/,
          name: 'redux',
          chunks: 'all',
        },
      },
    },
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
