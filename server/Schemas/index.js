const express = require("express");
const app = express();
const graphql = require("graphql");
const UserType = require("./TypeDefs/UserType"); // Import the UserType you defined
const userData = require("../MOCK_DATA.json"); // Import user data
const {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLInt,
  GraphQLString,
  GraphQLList,
} = graphql;

// Define a RootQuery for querying users
const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    getAllUsers: {
      type: new GraphQLList(UserType), // Define the response type as a list of UserTypes
      args: {
        id: { type: GraphQLInt }, // Define arguments, if needed
      },
      resolve(parent, args) {
        // Resolve function to fetch and return user data
        return userData;
      },
    },
  },
});

// Define a Mutation for creating a new user
const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    createUser: {
      type: UserType, // Define the response type as UserType
      args: {
        firstName: { type: GraphQLString },
        lastName: { type: GraphQLString },
        email: { type: GraphQLString },
        password: { type: GraphQLString },
      },
      resolve(parent, args) {
        // Resolve function to create a new user and return it
        userData.push({
          id: userData.length + 1,
          firstName: args.firstName,
          lastName: args.lastName,
          email: args.email,
          password: args.password,
        });
        return args;
      },
    },
  },
});

// Create a GraphQL schema, including the RootQuery and Mutation
module.exports = new GraphQLSchema({ query: RootQuery, mutation: Mutation });
