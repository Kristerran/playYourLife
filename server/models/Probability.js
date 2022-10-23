const { Schema, model } = require('mongoose');
const { Probability } = require('.');

const probabilitySchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  contents: {
    type: String,
    required: true,
  },
  probabilities: [{ type: Schema.Types.ObjectId, ref: 'Probability' }],
});

const Probability = model('Probability', probabilitySchema);

module.exports = Probability;
