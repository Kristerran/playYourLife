import { Schema, model } from 'mongoose';

const slidersSchema = new Schema({
  stress: {
    type: Number,
    required: true,
    default: 100,
  },
  energy: {
    type: Number,
    required: true,
    default: 100,
  },
  social: {
    type: Number,
    required: true,
    default: 100,
  },
  fun: {
    type: Number,
    required: true,
    default: 100,
  },
  selfCare: {
    type: Number,
    required: true,
    default: 100,
  },
});

const Sliders = model('Sliders', slidersSchema);

export { Sliders };
