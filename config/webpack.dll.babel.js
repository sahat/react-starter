const { uniq, pullAll } = require('lodash');
const webpack = require('webpack');
const pkg = require('../package.json');

// Do not build the Dll in production.
if (!pkg.dllPlugin) {
  process.exit();
}

// DLL consists of all modules found in "dependencies" of package.json, except the ones
// defined in the "excluded" entry of "dllPlugin" of package.json,
// plus any aditional packages in the "include" entry.
const dllEntry = () => {
  const dependencyNames = Object.keys(pkg.dependencies);
  const exclude = pkg.dllPlugin.exclude;
  const include = pkg.dllPlugin.include;
  const includeDependencies = uniq(dependencyNames.concat(include));

  return pullAll(includeDependencies, exclude);
};

// This is the Dll configuration (separate from development and production).
// It won’t be called by the Webpack middleware, Webpack server, or anything else,
// except manually or through a pre-build step.
// Dll dramatically increases the app start time and incremental build speed.
module.exports = require('./webpack.base.babel')({
  entry: {
    vendor: dllEntry()
  },
  // Generates "vendor.dll.js" inside "dll/" folder relative to project root.
  // The "vendor" prefix comes from the "entry" declaration above.
  output: {
    filename: '[name].dll.js',
    // Path is relative to "context", which is `process.cwd()` by default.
    path: 'dll/',
    // Expose the dll function into the global scope.
    library: '[name]'
  },
  plugins: [
    // Outputs Dll bundle and JSON manifest.
    // A manifest.json is really important, it contains mappings between the file paths
    // of modules inside the bundle and IDs that each module has been assigned.
    new webpack.DllPlugin({
      // Name of the global dll function (should match `output.library` above).
      name: '[name]',
      // Output path of the manifest file, which is a mapping between
      // modules included in a bundle and the internal ID within that bundle.
      path: 'dll/manifest.json'
    })
  ]
});
