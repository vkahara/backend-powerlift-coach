const hashPassword = require("./utils/hashPassword")
const signToken = require("./utils/signToken")
const verifyPassword = require("./utils/verifyPassword")
const { v4: uuidv4 } = require("uuid");
const User = require("./models/User");
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
    createUser: async (parent, args, context, info) => {
        const { password, ...rest} = args
        const hashedPassword = await hashPassword(password)
        const newUser = new User({
            id: uuidv4(),
            username: args.username,
            password: hashedPassword,
            squatMax: args.squatMax,
            benchMax: args.benchMax,
            deadliftMax: args.deadliftMax
        })
        newUser.save()
        return {
            id: newUser.id,
            username: newUser.username,
            password: newUser.password,
            squatMax: newUser.squatMax,
            benchMax: newUser.benchMax,
            deadliftMax: newUser.deadliftMax,
            token: signToken({ userId: newUser.id})
        }
    },
    loginUser: async (parent, args, context, info) => {
        const {password, username } = args
        const result = await User.findOne({username: username})
        const passwordIsValid = await verifyPassword(result.password, password)

        if (!passwordIsValid) {
            return "Invalid password"
        }
        return {
            id: result.id,
            username: result.username,
            token: signToken({userId: result.id})
    }
    }
  }
};

module.exports = resolvers;
