const express = require("express");
const app = express();

const PORT = 4040;
const userData = require("./MOCK_DATA.json");

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
