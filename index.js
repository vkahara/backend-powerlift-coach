require("dotenv").config();
const { ApolloServer } = require("apollo-server");
const mongoose = require("mongoose");
const typeDefs = require("./schema");
const resolvers = require("./resolvers");

//mongodb uri from dotenv
const MONGODB_URI = process.env.MONGODB_URI;

//set strickquery to false, remember to change later for prod
mongoose.set("strictQuery", false);
mongoose.connect(MONGODB_URI);

const db = mongoose.connection;
//handle db connection error
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Connected to database");
});

const server = new ApolloServer({ typeDefs, resolvers, contex: { db } });

server.listen().then(({ url }) => {
  console.log(`🙏🙏🙏 Server ready at ${url}`);
});
