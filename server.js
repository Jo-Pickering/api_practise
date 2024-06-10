const express = require("express");
const app = express();
const apiRouter = require("./src/router");
const cors = require("cors");
const bodyParser = require("body-parser");

//Port
const PORT = process.env.PORT || 5437;

//Middleware
app.use(cors());
app.use(bodyParser.json());

//Listening
app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});

//Redirect
app.get("/", (req, res) => {
  res.status(301).redirect("api/dinosaurs");
});

//Mount router
app.use("/api", apiRouter);
