/**
 * Module dependencies
 */
const mongoose = require('mongoose');
const timestamps = require('mongoose-timestamp');
const softDelete = require('mongoose-delete');

const SurveySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  mode: {
    type: String,
    enum: ['Private', 'Public'],
    required: true
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  steps: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Step'
  }],
  accesses: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'SurveyAccess'
  }]
});

SurveySchema.plugin(timestamps);
SurveySchema.plugin(softDelete);

module.exports = mongoose.model('Survey', SurveySchema);
