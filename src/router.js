const express = require("express");
const dinosaurRouter = require("./dinoRouter");
const apiRouter = express.Router();

module.exports = apiRouter;

apiRouter.use("/dinosaurs", dinosaurRouter);
