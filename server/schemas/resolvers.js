import { ApolloServer } from '@apollo/server';
import { User } from '../models/User.js';
import { Quest } from '../models/Quest.js';
import { auth } from '../utils/auth.js';

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
      if (context.user) {
        return User.findOne({ _id: context.user._id }).populate(
          'dailyQuests',
          'completedQuests'
        );
      }
      throw new Apolloserver.AuthenticationError('You need to be logged in!');
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
      const token = auth.signToken(user);

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
      const user = await User.findOne({ email }).populate('sliders');

      if (!user) {
        //We need to change these messages
        throw new AuthenticationError('No profile with this email found!');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        //Change here as well
        throw new AuthenticationError('Incorrect password!');
      }

      const token = auth.signToken(user);
      return { token, user };
    },

    // Add a third argument to the resolver to access data in our `context`
    // addCharacter: async (parent, { name, race, className, level }, context) => {
    //   // If context has a `user` property, that means the user executing this mutation has a valid JWT and is logged in
    //   if (context.user) {
    //     // var id = '624bc1198ae0b8bd3f2f7f6d';
    //     var character = await Character.create({
    //       name: name,
    //       race: race,
    //       className: className,
    //       level: level,
    //     });

    //     var user = await User.findOneAndUpdate(
    //       { _id: context.user._id },
    //       // { _id: id },
    //       {
    //         $push: {
    //           characters: character,
    //         },
    //       },
    //       {
    //         new: true,
    //         runValidators: true,
    //       }
    //     );
    //     return character;
    //   }
    //   // If user attempts to execute this mutation and isn't logged in, throw an error
    //   throw new AuthenticationError('You need to be logged in!');
    // },
    // addJournalEntry: async (
    //   parent,
    //   { characterId, title, session, contents, tags },
    //   context
    // ) => {
    //   // If context has a `user` property, that means the user executing this mutation has a valid JWT and is logged in
    //   if (context.user) {
    //     const journalEntry = await JournalEntry.create({
    //       title,
    //       session,
    //       contents,
    //       tags,
    //     });
    //     const character = await Character.findOneAndUpdate(
    //       { _id: characterId },
    //       {
    //         $push: {
    //           journal: journalEntry,
    //         },
    //       },
    //       {
    //         new: true,
    //         runValidators: true,
    //       }
    //     ).populate('journal');
    //     return { journal: character.journal };
    //   }
    //   // If user attempts to execute this mutation and isn't logged in, throw an error
    //   throw new AuthenticationError('You need to be logged in!');
    // },
    // Set up mutation so a logged in user can only remove their profile and no one else's
    removeUser: async (parent, args, context) => {
      if (context.user) {
        return User.findOneAndDelete({ _id: context.user._id });
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    // Make it so a logged in user can only remove a tier list from their own profile
    // removeQuest: async (parent, args, context) => {
    //   if (context.user) {
    //     return User.findOneAndUpdate(
    //       { _id: context.user._id },
    //       { quests: [] },
    //       { new: true }
    //     );
    //   }
    //   throw new AuthenticationError('You need to be logged in!');
    // },
    // Allow a user to update their profile information, without changing tier list.
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
      throw new AuthenticationError('You need to be logged in!');
    },

    // updateDailyQuests: async (parent, { dailyQuests }, context) => {
    //   if (context.user) {
    //     return User.findOneAndUpdate(
    //       { _id: context.user._id },
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
