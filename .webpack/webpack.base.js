const {
  resolve: {
    alias: ALIASES,
  },
} = require('../alias.config');

module.exports = {
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      }
    ],
  },
  node: {
    net: 'mock',
  },
  resolve: {
    alias: {
      ...ALIASES,
    },
  },
};
