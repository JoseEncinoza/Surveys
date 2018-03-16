/**
 * Module dependencies
 */
const path = require('path');

const env = process.env;
const nodeEnv = env.NODE_ENV || 'development';
const rootPath = path.normalize(__dirname);
const name = 'surveys';
const host = env.NODE_HOST || '127.0.0.1';
const port = env.NODE_PORT || 8080;

module.exports = {
  root: rootPath,
  app: {
    env: nodeEnv,
    name,
    host,
    port
  },
  db: {
    name,
    host: env.MONGO_HOST || '127.0.0.1',
    port: env.MONGO_PORT || 27017
  }
};
