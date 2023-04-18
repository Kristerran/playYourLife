import db from './connection.js';
import { User, Quest, Probability } from '../models/index.js';

db.once('open', async () => {
  await User.deleteMany();

  await User.create({
    email: 'terran@testmail.com',
    password: 'password12345',
  });

  await User.create({
    email: 'kris@testmail.com',
    password: 'password12345',
  });

  console.log('Users seeded');

  await Quest.deleteMany();

  await Quest.create({
    title: 'Drink some water',
    contents:
      'Anyone can use a drink of water no matter their stats. try a glass now and see how you feel.',
    stressLow: -1,
    stressHigh: 201,
    energyLow: -1,
    energyHigh: 201,
    socialLow: -1,
    socialHigh: 201,
    funLow: -1,
    funHigh: 201,
    selfCareLow: -1,
    selfCareHigh: 201,
  });
  await Quest.create({
    title: 'Take a bath',
    contents:
      'Your stats indicate you are stressed and your self care is low. Take a relaxing bath to de-stress and take care of your body.',
    stressLow: 120,
    stressHigh: 201,
    energyLow: -1,
    energyHigh: 201,
    socialLow: -1,
    socialHigh: 201,
    funLow: -1,
    funHigh: 201,
    selfCareLow: -1,
    selfCareHigh: 80,
  });

  console.log('Quests seeded');

  process.exit();
});
