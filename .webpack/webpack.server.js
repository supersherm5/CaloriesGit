const { resolve } = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base');
const webpackNodeExternals = require('webpack-node-externals');

const config  = {
  target: 'node',
  entry: resolve(__dirname, '../src/server/server.js'),
  output: {
    path: resolve(__dirname, '../build'),
    filename: 'bundle.js',
  },
  externals: [webpackNodeExternals()]
};

module.exports = merge(baseConfig, config);