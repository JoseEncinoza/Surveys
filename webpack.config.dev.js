const {resolve} = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin');
const baseConfig = require('./webpack.config.base');

module.exports = Object.assign({}, baseConfig, {
  entry: Object.assign({}, baseConfig.entry, {
    'react-hot-loader': 'react-hot-loader/patch',
    'webpack-hot-middleware': `webpack-hot-middleware/client?http://localhost:${process.env.HTTP_PORT}&reload=true`
  }),
  output: Object.assign({}, baseConfig.output, {
    hotUpdateMainFilename: 'hot-update.[hash:6].json',
    hotUpdateChunkFilename: 'hot-update.[hash:6].js'
  }),
  devtool: 'cheap-module-eval-source-map',
  plugins: baseConfig.plugins.concat([
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new HtmlWebpackPlugin({
      inject: true,
      chunks: ['site'],
      template: resolve(__dirname, 'client', 'index.html'),
      filename: resolve(__dirname, 'build-dev', 'client', 'site', 'index.html'),
      alwaysWriteToDisk: true
    }),
    new HtmlWebpackPlugin({
      inject: true,
      chunks: ['admin'],
      template: resolve(__dirname, 'client', 'index.html'),
      filename: resolve(__dirname, 'build-dev', 'client', 'admin', 'index.html'),
      alwaysWriteToDisk: true
    }),
    new HtmlWebpackHarddiskPlugin({
      outputPath: resolve(__dirname, 'build-dev', 'client')
    })
  ])
});
