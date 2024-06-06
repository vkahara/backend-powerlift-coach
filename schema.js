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

  type Exercise {
    name: String!
    sets: Int!
    reps: Int!
    intensity: Float
    load: Int
    rpe: Int
  }

  type Day {
    exercises: [Exercise!]!
  }

  type Week {
    days: [Day!]!
  }
`;

module.exports = typeDefs;
