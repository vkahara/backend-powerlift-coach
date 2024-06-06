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
    loginUser(
        username: String!
        password: String!
    ): User
  }
  type User {
    id: ID!
    username: String!
    password: String!
    token: String!
    squatMax: Float!
    benchMax: Float!
    deadliftMax: Float!
  }
`;

module.exports = typeDefs;
