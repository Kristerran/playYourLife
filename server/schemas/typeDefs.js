import gql from 'graphql-tag';

const typeDefs = gql`
  type User {
    _id: ID
    email: String
    stress: Int
    energy: Int
    social: Int
    fun: Int
    selfCare: Int
    lastDateSlidersUpdated: String
    dailyQuests: [ID]
  }

  type Quest {
    _id: ID
    title: String
    contents: String
    stressLow: Int
    stressHigh: Int
    energyLow: Int
    energyHigh: Int
    socialLow: Int
    socialHigh: Int
    funLow: Int
    funHigh: Int
    selfCareLow: Int
    selfCareHigh: Int
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]!
    user(userId: ID!): User
    me: User
    quests: [Quest]
    quest(questId: ID!): Quest
  }

  type Mutation {
    addUser(
      email: String!
      password: String!
      stress: Int
      energy: Int
      social: Int
      fun: Int
      selfCare: Int
      lastDateSlidersUpdated: String
    ): Auth
    addQuest(
      title: String
      contents: String
      stressLow: Int
      stressHigh: Int
      energyLow: Int
      energyHigh: Int
      socialLow: Int
      socialHigh: Int
      funLow: Int
      funHigh: Int
      selfCareLow: Int
      selfCareHigh: Int
    ): Auth
    login(email: String!, password: String!): Auth

    removeUser(userId: ID!): User

    updateUser(email: String, password: String!): User

    updateDailySliders(
      stress: Int
      energy: Int
      social: Int
      fun: Int
      selfCare: Int
      lastDateSlidersUpdated: String
    ): User
  }
`;

export default typeDefs;
