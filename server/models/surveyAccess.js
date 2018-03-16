/**
 * Module dependencies
 */
const mongoose = require('mongoose');
const timestamps = require('mongoose-timestamp');
const softDelete = require('mongoose-delete');

const SurveyAccessSchema = new mongoose.Schema({
  token: {
    type: String,
    required: true
  },
  survey: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Survey'
  }
});

SurveyAccessSchema.plugin(timestamps);
SurveyAccessSchema.plugin(softDelete);

module.exports = mongoose.model('SurveyAccess', SurveyAccessSchema);
