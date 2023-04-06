import { gql } from '@apollo/client';

export const ME = gql`
  query me {
    me {
      _id
      email
    }
  }
`;

export const QUESTS = gql`
  query quests {
    quests {
      _id
      title
      contents
      stressLow
      stressHigh
      energyLow
      energyHigh
      socialLow
      socialHigh
      funLow
      funHigh
      selfCareLow
      selfCareHigh
    }
  }
`;

export const BLOGPOST = gql`
  query blogPost {
    _id
    title
    contents
  }
`;
