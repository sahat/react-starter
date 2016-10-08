/**
 * COMMON WEBPACK CONFIGURATION
 */

// TODO MERGE INTO ONE WEBPACK with flags
// TODO https://gist.github.com/sokra/27b24881210b56bbaff7


const path = require('path');
const webpack = require('webpack');
const cssnext = require('postcss-cssnext');
const postcssFocus = require('postcss-focus');

module.exports = (options) => ({
  // The entry point for the bundle
  entry: options.entry,

  // Sourcemaps support
  devtool: options.devtool,

  // Compile into build/main.[hash].js
  output: Object.assign({
    path: path.resolve(process.cwd(), 'build'),
    publicPath: '/',
  }, options.output), // Merge with env dependent settings

  // Where all the Webpack magic happens
  module: {
    loaders: [
      {
        // Transform all .js files with Babel
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/,
        query: options.babelQuery,
      },
      {
        // Transform our own .css files with PostCSS and CSS modules
        test: /\.css$/,
        exclude: /node_modules/,
        loader: options.cssLoader,
      },
      {
        // Do not transform vendor's CSS with CSS modules and PosCSS
        test: /\.css$/,
        include: /node_modules/,
        loader: options.cssVendorLoader,
      },
      // file-loader makes sure those assets end up in the `build` folder.
      {
        test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)(\?.*)?$/,
        loader: 'file-loader?name=[name].[ext]'
      },
      {
        test: /\.html$/,
        loader: 'html-loader'
      },
      // JSON is not enabled by default in Webpack but both Node and Browserify
      // allow it implicitly, so we also enable it.
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      // url-loader works just like file-loader except it also embeds
      // assets smaller than specified size as data URLs to avoid requests.
      {
        test: /\.(mp4|webm|wav|mp3|m4a|aac|oga)(\?.*)?$/,
        loader: 'url-loader?limit=10000'
      }
    ]
  },

  plugins: options.plugins.concat([
    // Make these libraries globally available
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      Tether: 'tether',
      'window.Tether': 'tether',
      fetch: 'imports?this=>global!exports?global.fetch!whatwg-fetch'
    }),

    // Always expose NODE_ENV to webpack, in order to use `process.env.NODE_ENV`
    // inside your code for any environment checks; UglifyJS will automatically
    // drop any unreachable code.
    new webpack.DefinePlugin({
      'process.env': { NODE_ENV: JSON.stringify(process.env.NODE_ENV) }
    }),
  ]),

  // Load PostCSS plugins
  postcss: () => [postcssFocus, cssnext],

  // An array of directories used to resolve modules
  resolve: {
    modules: ['app', 'node_modules'],
  },
  stats: false
});
