const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    email: String
    sliders: [Sliders]
  }

  type Quest {
    name: String
    contents: String
    probability: [Probability]
  }

  type Sliders {
    _id: ID
    stress: Int
    energy: Int
    social: Int
    fun: Int
    selfCare: Int
  }

  type Probability {
    _id: ID
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
    questProbability(questId: ID!): Probability
    quest(questId: ID!): Quest
  }

  type Mutation {
    addUser(email: String!, password: String!): Auth

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

module.exports = typeDefs;
