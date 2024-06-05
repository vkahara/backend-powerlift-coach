const { v4: uuidv4 } = require("uuid");
const User = require("./models/Users");

const resolvers = {
  Query: {
    //get one user
    user: async (parent, args, context, info) => {
      return await User.findOne({ username: args.username });
    },
    //get all users
    users: async () => {
      return await User.find();
    }
  },

  Mutation: {
    //create new user
    createUser: async (parent, args, context, info) => {
      const newUser = new User({
        id: uuidv4(),
        username: args.username,
        password: args.password,
        squatMax: args.squatMax,
        benchMax: args.benchMax,
        deadliftMax: args.deadliftMax
      });
      return await newUser.save();
    }
  }
};

module.exports = resolvers;
