/**
 * Module dependencies
 */
const mongoose = require('mongoose');
const timestamps = require('mongoose-timestamp');
const softDelete = require('mongoose-delete');

const QuestionSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  mode: {
    type: String,
    enum: ['Open', 'Close', 'Mixed'],
    required: true
  },
  choice: [{
    type: String
  }],
  options: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'QuestionOption'
  }]
});

QuestionSchema.plugin(timestamps);
QuestionSchema.plugin(softDelete);

module.exports = mongoose.model('Question', QuestionSchema);
