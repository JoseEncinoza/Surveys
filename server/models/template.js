/**
 * Module dependencies
 */
const mongoose = require('mongoose');
const timestamps = require('mongoose-timestamp');
const softDelete = require('mongoose-delete');

const TemplateSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  steps: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Step'
  }]
});

TemplateSchema.plugin(timestamps);
TemplateSchema.plugin(softDelete);

module.exports = mongoose.model('Template', TemplateSchema);
