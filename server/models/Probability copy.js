import { Schema, model } from 'mongoose';

const probabilitySchema = new Schema({
  stressReward: {
    type: Number,
    required: true,
  },
  energyReward: {
    type: Number,
    required: true,
  },
  socialReward: {
    type: Number,
    required: true,
  },
  funReward: {
    type: Number,
    required: true,
  },
  selfCareReward: {
    type: Number,
    required: true,
  },
});

const Probability = model('Probability', probabilitySchema);

module.exports = Probability;
