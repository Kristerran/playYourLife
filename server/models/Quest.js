const { Schema, model } = require('mongoose');

const questSchema = new Schema({
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

const Quest = model('Quest', questSchema);

module.exports = Quest;
