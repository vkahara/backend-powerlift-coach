const { gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    user(username: String!): User
    users: [User]
  }
  type Mutation {
    createUser(
      username: String!
      password: String!
      squatMax: Float!
      benchMax: Float!
      deadliftMax: Float!
    ): User
  }
  type User {
    id: ID!
    username: String!
    password: String!
    squatMax: Float!
    benchMax: Float!
    deadliftMax: Float!
  }
`;

module.exports = typeDefs;
