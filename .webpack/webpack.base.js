const {
  resolve: {
    alias: ALIASES,
  },
} = require('../alias.config');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const UglifyJsWebpackPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  mode: 'production',
  // Don't attempt to continue if there are any errors.
  bail: true,
  plugins: [
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      reportFilename: `../reports/webpack/webpack.html`,
      statsFilename: `../reports/webpack/stats.json`,
      openAnalyzer: false,
      generateStatsFile: true,
      logLevel: 'error',
    }),
    // Minify the code.
    new UglifyJsWebpackPlugin({
      sourceMap: true,
      uglifyOptions: {
        compress: {
          booleans: true,
          comparisons: true,
          conditionals: true,
          dead_code: true,
          drop_console: true,
          drop_debugger: true,
          evaluate: true,
          hoist_funs: true,
          if_return: true,
          join_vars: true,
          loops: true,
          negate_iife: true,
          properties: true,
          ie8: false,
          sequences: true,
          unused: true,
        },
        mangle: {
          ie8: false,
          reserved: ['exports', 'require', 'const'],
        },
        output: {
          ie8: false,
        },
      },
    }),
  ],
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
