const fs = require('fs');
const path = require('path');
const chalk = require('chalk');
const shell = require('shelljs');

const defaults = require('lodash/defaultsDeep');
const pkg = require('../package.json');

// Don't build the DLL in production
if (process.env.NODE_ENV === 'production') {
  process.exit(0);
}

const outputPath = path.join(process.cwd(), pkg.dllPlugin.path);
const dllManifestPath = path.join(outputPath, 'package.json');


shell.mkdir('-p', outputPath);

shell.echo(chalk.magenta('=> Building the Webpack DLL...'));

if (!fs.existsSync(dllManifestPath)) {
  fs.writeFileSync(
    dllManifestPath,
    JSON.stringify(defaults({
      name: 'react-stater-dlls',
      version: pkg.version,
      private: true
    }), null, 2),
    'utf8'
  );
}

// the BUILDING_DLL env var is set to avoid confusing the development environment
shell.exec('cross-env BUILDING_DLL=true webpack --display-chunks --color --config config/webpack.dll.babel.js');
