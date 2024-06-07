const express = require("express");
const app = express();
const apiRouter = require("./src/router");
const cors = require("cors");
const bodyParser = require("body-parser");

const PORT = process.env.PORT || 5437;

app.use(cors());
app.use(bodyParser.json());

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});

app.use("/api", apiRouter);
