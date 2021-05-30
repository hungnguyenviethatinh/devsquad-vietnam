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
    { from: 'public/.conf', to: '.conf', toType: 'file' },
    { from: 'public/.htaccess', to: '.htaccess', toType: 'file' },
    { from: 'public/_redirects', to: '_redirects', toType: 'file' },
    { from: 'public/web.config', to: 'web.config', toType: 'file' },
    { from: 'public/images/2.png', to: 'static/images/2.png', toType: 'file' },
    { from: 'public/images/5.png', to: 'static/images/5.png', toType: 'file' },
    { from: 'public/images/8.png', to: 'static/images/8.png', toType: 'file' },
    { from: 'public/images/11.png', to: 'static/images/11.png', toType: 'file' },
    { from: 'public/images/12.png', to: 'static/images/12.png', toType: 'file' },
    { from: 'public/images/18.png', to: 'static/images/18.png', toType: 'file' },
    { from: 'public/images/36.png', to: 'static/images/36.png', toType: 'file' },
    { from: 'public/images/DevsquadLogo.png', to: 'static/images/DevsquadLogo.png', toType: 'file' },
    { from: 'public/images/DevsquadWorkshop.jpg', to: 'static/images/DevsquadWorkshop.jpg', toType: 'file' },
    { from: 'public/images/image2.jpg', to: 'static/images/image2.jpg', toType: 'file' },
    { from: 'public/images/image3.jpg', to: 'static/images/image3.jpg', toType: 'file' },
    { from: 'public/images/NewYear2021.jpg', to: 'static/images/NewYear2021.jpg', toType: 'file' },
    { from: 'public/images/Technology.jpg', to: 'static/images/Technology.jpg', toType: 'file' },
    { from: 'public/images/vws1.png', to: 'static/images/vws1.png', toType: 'file' }
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
