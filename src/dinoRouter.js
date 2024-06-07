const express = require("express");
const dinosaurRouter = express.Router();
const dinosaurs = require("/db.js");
const getDinoById = require("./utils");

module.exports = dinosaurRouter;

dinosaurRouterRouter.param("dinoName", (req, res, next, id) => {
  const dino = getDinoByName(name);
  if (dino) {
    req.dino = dino;
    next();
  } else {
    res.status(404).send("That dinosaur appears to have been eaten...");
  }
});

dinosaurRouter.get("/", (req, res, next) => {
  res.send(dinosaurs);
});

dinosaurRouter.get("/:dinoName", (req, res, next) => {
  res.send(dino);
});

dinosaurRouter.post("/", (req, res, next) => {
  dinosaurs.push(createDino(req.body));
  res.status(201).send(req.body);
});

dinosaurRouter.put("/:dinoName", (req, res, next) => {
  if (req.dino) {
    const index = dinosaurs.findIndex((name) => (dino.name = req.dino));
    dinosaurs[index] = createDino(req.body);
    res.status(201).send(createDino);
  } else {
    res.status(404).send("Nope. That dino is not on this list");
  }
});

dinosaurRouter.delete("/:dinoName", (req, res, next) => {
  const index = dinosaurs.findIndex((name) => (dino.name = req.dino));
  dinosaurs.splice(index, 1);
  res.status(204).send("EXTINCTION EVENT!");
});
