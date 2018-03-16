/**
 * Module dependencies
 */
const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const logger = require('./logger');
const config = require('./config');

function onUnhandledError(err) {
  try {
    logger.error(err);
  } catch (e) {
    console.log('LOGGER ERROR:', e);
    console.log('APPLICATION ERROR:', err);
  }
  process.exit(1);
}

process.on('unhandledRejection', onUnhandledError);
process.on('uncaughtException', onUnhandledError);

const setupAppRoutes = (
  config.app.env === 'development'
    ? require('./middlewares/development')
    : require('./middlewares/production')
);

const app = express();

app.set('env', config.app.env);
logger.info(`Application env: ${config.app.env}`);

app.use(logger.expressMiddleware);
app.use(bodyParser.json());

// application routes
setupAppRoutes(app);

http.createServer(app).listen(config.app.port, () => {
  logger.info(`HTTP server is now running on http://${config.app.host}:${config.app.port}`);
});
