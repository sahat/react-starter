/**
 * WEBPACK DLL GENERATOR
 *
 * This profile is used to cache webpack's module
 * contexts for external library and framework type
 * dependencies which will usually not change often enough
 * to warrant building them from scratch every time we use
 * the webpack process.
 */

const path = require('path');
const pullAll = require('lodash/pullAll');
const uniq = require('lodash/uniq');
const webpack = require('webpack');
const pkg = require('../package.json');

if (!pkg.dllPlugin) {
  process.exit(0);
}

const outputPath = path.join(process.cwd(), pkg.dllPlugin.path);

const dllEntry = () => {
  const dependencyNames = Object.keys(pkg.dependencies);
  const exclude = pkg.dllPlugin.exclude;
  const include = pkg.dllPlugin.include;
  const includeDependencies = uniq(dependencyNames.concat(include));

  return pullAll(includeDependencies, exclude);
};

module.exports = require('./webpack.base.babel')({
  context: process.cwd(),
  entry: dllEntry(),
  devtool: 'eval',
  output: {
    filename: '[name].dll.js',
    path: outputPath,
    library: '[name]'
  },
  plugins: [
    new webpack.DllPlugin({
      name: '[name]',
      path: path.join(outputPath, '[name].json')
    })
  ]
});
