const mongoose = require('mongoose');

const recommendationSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    enum: ['Energy', 'Transportation', 'Food', 'Waste', 'General'],
    required: true,
  },
  minFootprint: {
    type: Number, // Minimum carbon footprint this recommendation applies to
    required: true,
  },
  maxFootprint: {
    type: Number, // Maximum carbon footprint this recommendation applies to
    required: true,
  },
});

module.exports = mongoose.model('Recommendation', recommendationSchema);
