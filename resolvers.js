const { v4: uuidv4 } = require("uuid");

let users = [
  //testestsets create db later
  {
    id: uuidv4(),
    username: "valtteri",
    password: "labra123",
    squatMax: 195,
    benchMax: 102.5,
    deadliftMax: 205
  }
];

const resolvers = {
  Query: {
    user: (parent, args, context, info) => {
      return users.find((user) => user.username === args.username);
    },
    users: () => users
  },

  Mutation: {
    createUser: (parent, args, context, info) => {
      const newUser = {
        id: uuidv4(),
        username: args.username,
        password: args.password,
        squatMax: args.squatMax,
        benchMax: args.benchMax,
        deadliftMax: args.deadliftMax
      };
      users.push(newUser);
      return newUser;
    }
  }
};

module.exports = resolvers;
