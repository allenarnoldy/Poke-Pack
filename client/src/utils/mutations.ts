import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
mutation LoginUser($username: String!, $password: String!) {
  login(username: $username, password: $password) {
    token
    user {
      _id
      username
    }
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

export const DELETE_CARD = gql`
  mutation removeCardFromBinder($cardId: ID!) {
    removeCardFromBinder(cardId: $cardId) {
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
    }
  }
`;