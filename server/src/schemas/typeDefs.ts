import { gql } from 'apollo-server-express';

const typeDefs = gql`
  type Query {
    me: User
    openSinglePack(setName: String): [Card]
  }

  type User {
    _id: ID!
    username: String!
    email: String!
    binder: [Card]
  }

  type Auth {
    token: ID!
    user: User!
  }

  type Card {
    _id: ID
    name: String
    level: String
    types: [String]
    setName: String
    rarity: String
    imageUrl: String
  }

  type Mutation {
    saveCardToBinder(cardID: ID!): User 
    removeCardFromBinder: ID!
    addUser(username: String!, email: String!, password: String!): Auth
    login(username: String!, password: String!): Auth
  }
`;

export default typeDefs;
