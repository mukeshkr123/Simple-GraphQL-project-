const express = require("express");
const app = express();
const graphql = require("graphql");
const { graphqlHTTP } = require("express-graphql");

const PORT = 4040;
const userData = require("./MOCK_DATA.json");

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
