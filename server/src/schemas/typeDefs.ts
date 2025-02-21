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
    evolvesFrom: String
    rarity: String
    imageUrl: String
  }

  type Mutation {
    saveCardToBinder: String
    removeCardFromBinder: String
    createUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
  }
`;

export default typeDefs;
