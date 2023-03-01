import gql from 'graphql-tag';

const typeDefs = gql`
  type User {
    _id: ID
    email: String
    sliders: [Sliders]
  }

  type Quest {
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

  type Sliders {
    _id: ID
    stress: Int
    energy: Int
    social: Int
    fun: Int
    selfCare: Int
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]!
    user(userId: ID!): User
    me: User
    sliders(userId: ID!): Sliders
    quests: [Quest]
    quest(questId: ID!): Quest
  }

  type Mutation {
    addUser(email: String!, password: String!): Auth
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

    addSliders(
      stress: Int!
      energy: Int!
      social: Int!
      fun: Int!
      selfCare: Int!
    ): Sliders

    removeUser(userId: ID!): User

    updateUser(email: String, password: String): User
  }
`;

export default typeDefs;
