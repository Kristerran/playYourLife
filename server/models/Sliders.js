const { Schema, model } = require('mongoose');

const slidersSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  race: {
    type: String,
    required: true,
  },
  className: {
    type: String,
    required: true,
  },
  level: {
    type: Number,
    required: true,
    default: 1,
  },
  journal: [{ type: Schema.Types.ObjectId, ref: 'JournalEntry' }],
});

const Sliders = model('Sliders', slidersSchema);

module.exports = Sliders;
