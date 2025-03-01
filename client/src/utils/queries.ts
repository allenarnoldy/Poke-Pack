import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  {
    me {
      email
      binder {
        _id
        name
        level
        types
        setName
        rarity
        imageUrl
      }
      _id
      username
    }
  }
`;

export const OPEN_SINGLE_PACK = gql`
  query GetCards($setName: String!) {
    openSinglePack(setName: $setName) {
      _id
      types
      setName
      rarity
      name
      level
      imageUrl
    }
  }
`;
