const express = require("express");
const dinosaurRouter = express.Router();
const dinosaurs = require("./db");
const { getDinoByName, createDino } = require("./helpers");

module.exports = dinosaurRouter;

dinosaurRouter.param("dinosaurName", (req, res, next, dinosaurName) => {
  const dino = getDinoByName(dinosaurName);
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

dinosaurRouter.get("/:dinosaurName", (req, res, next) => {
  res.send(req.dino);
});

dinosaurRouter.post("/", (req, res, next) => {
  dinosaurs.push(createDino(req.body));
  res.status(201).send(req.body);
});

dinosaurRouter.put("/:dinosaurName", (req, res, next) => {
  if (req.dino) {
    const index = dinosaurs.findIndex((dino) => (dino.name = req.dino));
    dinosaurs[index] = { id: index + 1, ...req.body };
    res.status(201).send(dinosaurs[index]);
  } else {
    res.status(404).send("Nope. That dino is not on this list");
  }
});

dinosaurRouter.delete("/:dinosaurName", (req, res, next) => {
  const index = dinosaurs.findIndex((dino) => (dino.name = req.dino));
  dinosaurs.splice(index + 1, 1);
  res.status(204).send("EXTINCTION EVENT!");
});
