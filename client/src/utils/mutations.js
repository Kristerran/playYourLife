import { gql } from '@apollo/client';

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($email: String!, $password: String!) {
    addUser(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_BLOGPOST = gql`
  mutation addBlogPost($title: String!, $contents: String!) {
    addBlogPost(title: title, contents: contents) {
      title
      contents
    }
  }
`;
export const UPDATE_USER = gql`
  mutation updateDailySliders(
    $stress: Num!
    $energy: Num!
    $social: Num!
    $fun: Num!
    $selfCare: Num!
    $lastDateSlidersUpdated: String!
  ) {
    updateDailySliders(
      stress: $stress
      energy: $energy
      social: $social
      fun: $fun
      selfCare: $selfCare
      lastDateSlidersUpdated: $lastDateSlidersUpdated
    ) {
      energy
      social
      fun
      selfCare
      lastDateSlidersUpdated
    }
  }
`;
export const UPDATE_DAILY_QUESTS = gql`
  mutation updateDailyQuests($title: String!, $contents: String!) {
    updateDailyQuests(title: $title, contents: $contents) {
      title
      contents
    }
  }
`;
