// Import required modules and dependencies
const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const cors = require("cors");
const schema = require("./Schemas/index");

// Create an Express application
const app = express();
const PORT = 4040;
//cors
app.use(cors());

// Define a route for handling GraphQL requests
app.use(
  "/graphql",
  graphqlHTTP({
    schema, // The GraphQL schema you've defined
    graphiql: true, // Enable GraphiQL, a web-based tool for testing and exploring your GraphQL API
  })
);

// Start the server and listen on the specified port
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
