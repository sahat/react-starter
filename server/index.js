/* eslint-disable no-console */

const chalk = require('chalk');
const express = require('express');
const setup = require('./middlewares/frontendMiddleware');
const resolve = require('path').resolve;
const api = require('./api');

const app = express();
const port = process.env.PORT || 3000;

// REST API Endpoints
app.use('/api', api);

// In production we need to pass these values in instead of relying on webpack
setup(app, {
  outputPath: resolve(process.cwd(), 'build'),
  publicPath: '/',
});

// Start Express server
app.listen(port, () => {
  console.log(chalk.green('✔'), 'App is running at:', chalk.underline.bold(`http://localhost:${port}`));
  console.log('  Press CTRL-C to stop\n');
});
