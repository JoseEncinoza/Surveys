/**
 * Module dependencies
 */
const mongoose = require('mongoose');
const timestamps = require('mongoose-timestamp');
const softDelete = require('mongoose-delete');

const StepSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  lead: {
    type: String,
    required: true
  },
  recommendations: [{
    type: String
  }],
  questions: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Question'
  }]
});

StepSchema.plugin(timestamps);
StepSchema.plugin(softDelete);

module.exports = mongoose.model('Step', StepSchema);
