const mongoose = require('mongoose');

const designSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  images: [String],
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
}, { timestamps: true });

module.exports = mongoose.model('Design', designSchema);
