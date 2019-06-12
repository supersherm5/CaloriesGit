const { resolve } = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base');

const config = {
  target: 'web',
  devtool: 'source-map',

  entry: resolve(__dirname, '../src/client/client.js'),

  output: {
    path: resolve(__dirname, '../public'),
    filename: 'clientBundle.js'
  }

};

module.exports = merge(baseConfig, config);