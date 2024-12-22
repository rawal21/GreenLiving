const mongoose = require('mongoose');

const historySchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  date: { type: Date, default: Date.now },
  footprint: { type: Number, required: true },
},
{ timestamps: true }
);

module.exports = mongoose.model('History', historySchema);
