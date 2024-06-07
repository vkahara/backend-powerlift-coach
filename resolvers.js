const { v4: uuidv4 } = require("uuid");
const User = require("./models/Users");
const getWeeks = require("./utils/weeks");

const resolvers = {
  Query: {
    //get one user
    user: async (parent, args, context, info) => {
      return await User.findOne({ username: args.username });
    },

    //get all users
    users: async () => {
      return await User.find();
    },

    //get week
    week: async (parent, args, context, info) => {
      const user = await User.findOne({ username: args.username });
      // generate program using getWeeks from utils/weeks.js
      const program = getWeeks(user);
      //select which week using week number as argument
      const week = program[`week${args.week}`];
      //convert week object into array of days and
      //for each day convert the exercises into array
      const days = Object.keys(week).map((dayKey) => ({
        exercises: Object.keys(week[dayKey]).map(
          (exerciseKey) => week[dayKey][exerciseKey]
        )
      }));

      return { days };
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
