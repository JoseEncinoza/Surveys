/**
 * Module dependencies
 */
const mongoose = require('mongoose');
const timestamps = require('mongoose-timestamp');
const softDelete = require('mongoose-delete');

const ProfileSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  displayName: {
    type: String,
    required: true
  },
  description: {
    type: String
  }
});

ProfileSchema.plugin(timestamps);
ProfileSchema.plugin(softDelete);

module.exports = mongoose.model('Profile', ProfileSchema);
