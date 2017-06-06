/**
 * Created by jiaojiaodebook on 17/1/18.
 */
const path = require('path');
const webpack = require('webpack');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');

module.exports = {
  entry: {
    app: ['whatwg-fetch', './src/app.js']
  },
  output: {
    path: path.join(__dirname, 'build'),
    filename: '[name].js',
    publicPath: '/build/',
    chunkFilename: '[name].min.js?[hash:8]'
  },
  rules: [
    {
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: /node_modules/
    },
    {
      test: /\.css/,
      use: ['style-loader', 'css-loader', 'postcss-loader']
    },
    {
      test: /\.less/,
      use: ['style-loader', 'css-loader', 'autoprefixer-loader', 'less-loader']
    },
    {
      test: /\.(png|jpg|gif|svg|eot|svg|ttf|woff|woff2)$/,
      loader: 'file-loader',
      options: {
        name: '[name].[ext]'
      }
    }
  ],
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new OpenBrowserPlugin({ url: 'http://localhost:8087' })
  ],
  resolve: {
    extensions: ['', '.js', '.jsx', '.css', '.less']
  },
  debug: true
};
