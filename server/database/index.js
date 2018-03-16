/**
 * Module dependencies
 */
const mongoose = require('mongoose');
const {db} = require('../config');
const logger = require('../logger');
const {Mockgoose} = require('mockgoose');

const mockgoose = new Mockgoose(mongoose);

module.exports = () => {
  if (process.env.NODE_ENV !== 'production') {
    mockgoose.prepareStorage().then(() => {
      mongoose.connect(`mongodb://${db.host}:${db.port}/${db.name}`);
      mongoose.connection.on('connected', () => {
        logger.info('mock db connection is now open');
      });
    });
  } else {
    mongoose.connect(`mongodb://${db.host}:${db.port}/${db.name}`);
    mongoose.connection.on('connected', () => {
      logger.info('db connection is now open');
    });
  }
};
