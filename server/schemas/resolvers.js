import { ApolloServer } from '@apollo/server';
import { User } from '../models/User.js';
import { Quest } from '../models/Quest.js';
import auth from '../utils/auth.js';
import { GraphQLError } from 'graphql';
const signToken = auth.signToken;
const authMiddleware = auth.authMiddleware;
const resolvers = {
  Query: {
    users: async () => {
      return User.find();
    },

    user: async (parent, { userId }) => {
      return User.findOne({ _id: userId });
    },
    // By adding context to our query, we can retrieve the logged in user without specifically searching for them
    me: async (parent, args, context) => {
      console.log(context.auth.user);
      if (context.auth.user) {
        return User.findOne({ _id: context.auth.user._id }).populate(
          'dailyQuests',
          'completedQuests'
        );
      }
      throw new GraphQLError('You need to be logged in!');
    },
    quests: async () => {
      return Quest.find();
    },
    quest: async (parents, { questId }) => {
      return Quest.findOne({ _id: questId });
    },
  },

  Mutation: {
    addUser: async (parent, { email, password }) => {
      const user = await User.create({
        email,
        password,
      });
      const token = signToken(user);

      return { token, user };
    },
    addQuest: async (
      title,
      contents,
      stressLow,
      stressHigh,
      energyLow,
      energyHigh,
      socialLow,
      socialHigh,
      funLow,
      funHigh,
      selfCareLow,
      selfCareHigh
    ) => {
      const quest = await Quest.create({
        title,
        contents,
        stressLow,
        stressHigh,
        energyLow,
        energyHigh,
        socialLow,
        socialHigh,
        funLow,
        funHigh,
        selfCareLow,
        selfCareHigh,
      });

      return { quest };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email }).populate(
        'currentQuests',
        'completedQuests'
      );

      if (!user) {
        //We need to change these messages
        throw new GraphQLError('No profile with this email found!');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        //Change here as well
        throw new GraphQLError('Incorrect password!');
      }

      const token = signToken(user);
      return { token, user };
    },

    removeUser: async (parent, args, context) => {
      console.log(context);
      if (context.user) {
        return User.findOneAndDelete({ _id: context.user._id });
      }
      throw new GraphQLError('You need to be logged in!');
    },

    updateUser: async (parent, { email, password }, context) => {
      if (context.user) {
        return User.findOneAndUpdate(
          { _id: context.user._id },
          {
            email: email,
            password: password,
          }
        );
      }
      throw new GraphQLError('You need to be logged in!');
    },

    updateDailySliders: async (
      parent,
      { energy, fun, selfCare, social, stress, lastDateSlidersUpdated },
      context
    ) => {
      console.log(context.auth);
      if (context.auth.user) {
        return User.findOneAndUpdate(
          { _id: context.auth.user._id },
          {
            energy: energy,
            fun: fun,
            selfCare: selfCare,
            social: social,
            stress: stress,
            lastDateSlidersUpdated: lastDateSlidersUpdated,
          }
        );
      }
      throw new GraphQLError('thrown');
    },

    // updateDailyQuests: async (parent, { dailyQuests }, context) => {
    //   if (context.auth.user) {
    //     return User.findOneAndUpdate(
    //       { _id: context.auth.user._id },
    //       {
    //         dailyQuests: [Quest],
    //       }
    //     );
    //   }
    //   throw new AuthenticationError('You need to be logged in!');
    // },
  },
};

export default resolvers;
