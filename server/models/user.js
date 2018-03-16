/**
 * Module dependencies
 */
const mongoose = require('mongoose');
const bcrypt = require('mongoose-bcrypt');
const timestamps = require('mongoose-timestamp');
const softDelete = require('mongoose-delete');
const {capitalize} = require('../utils');

require('mongoose-type-email');

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  firstname: {
    type: String,
    required: true
  },
  lastname: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true,
    index: true,
    unique: true,
    bcrypt: true
  },
  email: {
    type: mongoose.SchemaTypes.Email,
    required: true
  }
});

UserSchema.plugin(bcrypt);
UserSchema.plugin(timestamps);
UserSchema.plugin(softDelete);

UserSchema.path('firstname').set(v => capitalize(v));
UserSchema.path('lastname').set(v => capitalize(v));

module.exports = mongoose.model('User', UserSchema);
