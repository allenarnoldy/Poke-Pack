import { gql } from 'apollo-server-express';

const typeDefs = gql`
  type Query {
    me: User
    openSinglePack: [Card]
  }

  type User {
    _id: ID!
    username: String!
    email: String!
  }

  type Auth {
    token: ID!
    user: User!
  }

  type Card {
    id: ID
    name: String
    level: String
    types: [String]
    setName: String
    rarity: String
    imageUrl: String
  }

  type Mutation {
    saveCardToBinder: String
    removeCardFromBinder: String
    addUser(username: String!, email: String!, password: String!): Auth
    login(username: String!, password: String!): Auth
  }
`;

export default typeDefs;
