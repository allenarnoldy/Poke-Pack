import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
        email
      }
      token
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
        email
      }
      token
    }
  }
`;

export const GET_CARDS = gql`
  query GetCards {
    openSinglePack {
      id
      name
      level
      types
      evolvesFrom
      rarity
      imageUrl
    }
  }
`;

export const Delete_Card = gql`
    mutation removeCardFromBinder {
        removeCardFromBinder
        _id
        username
        savedCards {
            id
            name
            level
            types
            evolvesFrom
            rarity
            imageUrl
        }
    `;
