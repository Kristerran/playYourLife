import db from './connection';
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
    title: 'I show up no matter what',
    contents: "YOU CAN'T GET RID OF ME B#$% I'M NOT GOING TO F#%ING WHERE!",
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
    title: 'I show up no matter what #2',
    contents: 'YO CHECK IT OUT MULTIPLE QUESTS ARE YOU ENJOYING IT YET?!',
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

  console.log('Quests seeded');

  process.exit();
});
