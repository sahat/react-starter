/**
 * PRODUCTION WEBPACK CONFIGURATION
 */

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = require('./webpack.base.babel')({
  // In production, we skip hot-reloading
  entry: [
    path.join(process.cwd(), 'app/app.js'),
  ],

  // Utilize long-term caching by adding content hashes (not compilation hashes) to compiled assets
  output: {
    filename: '[name].[chunkhash].js',
    chunkFilename: '[name].[chunkhash].chunk.js',
  },

  // We use ExtractTextPlugin so we get a separate CSS file instead
  // of the CSS being in the JS and injected as a style tag
  cssLoader: ExtractTextPlugin.extract({
    fallbackLoader: 'style-loader',
    loader: 'css-loader?modules&-autoprefixer&importLoaders=1!postcss-loader',
  }),

  // Same as abpve, but do not use CSS modules or PostCSS loaders for vendor CSS
  cssVendorLoader: ExtractTextPlugin.extract({
    fallbackLoader: 'style-loader',
    loader: 'css-loader',
  }),

  plugins: [
    // Code splitting
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      children: true,
      minChunks: 2,
      async: true
    }),

    // Needed for long-term caching to work properly
    new webpack.optimize.OccurrenceOrderPlugin(true),

    // Merge all duplicate modules
    new webpack.optimize.DedupePlugin(),

    // Minify and optimize the HTML
    new HtmlWebpackPlugin({
      template: 'app/index.html',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        removeEmptyAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      },
      inject: true
    }),

    // Extract the CSS into a seperate file
    new ExtractTextPlugin('[name].[contenthash].css')
  ],
});
