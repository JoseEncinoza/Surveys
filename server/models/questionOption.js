/**
 * Module dependencies
 */
const mongoose = require('mongoose');
const timestamps = require('mongoose-timestamp');
const softDelete = require('mongoose-delete');

const QuestionOptionSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
  },
  items: [{
    type: String
  }],
  required: {
    type: Boolean,
    default: false
  }
});

QuestionOptionSchema.plugin(timestamps);
QuestionOptionSchema.plugin(softDelete);

module.exports = mongoose.model('QuestionOption', QuestionOptionSchema);
