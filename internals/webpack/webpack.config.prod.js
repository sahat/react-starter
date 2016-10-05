/**
 * PRODUCTION WEBPACK CONFIGURATION
 */

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

// PostCSS plugins
const cssnext = require('postcss-cssnext');

module.exports = require('./webpack.config.base')({
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
  cssLoaders: ExtractTextPlugin.extract(
    'style-loader',
    'css-loader?modules&-autoprefixer&importLoaders=1!postcss-loader'
  ),

  vendorCssLoaders: ExtractTextPlugin.extract(
    'style-loader',
    'css-loader'
  ),

  // In production, we minify our CSS with cssnano
  postcssPlugins: [
    cssnext({ browsers: ['last 2 versions', 'IE > 10'] })
  ],

  plugins: [
    // Code splitting for better performance
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

    // Minify and optimize the JavaScript
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
    }),

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
