import { Schema, model } from 'mongoose';
const probabilitySchema = new Schema({
  stressLow: {
    type: Number,
    required: true,
  },
  stressHigh: {
    type: Number,
    required: true,
  },
  energyLow: {
    type: Number,
    required: true,
  },
  energyHigh: {
    type: Number,
    required: true,
  },
  socialLow: {
    type: Number,
    required: true,
  },
  socialHigh: {
    type: Number,
    required: true,
  },
  funLow: {
    type: Number,
    required: true,
  },
  funHigh: {
    type: Number,
    required: true,
  },
  selfCareLow: {
    type: Number,
    required: true,
  },
  selfCareHigh: {
    type: Number,
    required: true,
  },
});

const Probability = model('Probability', probabilitySchema);

export { Probability };
