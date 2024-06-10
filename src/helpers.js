const dinosaurs = require("./db");

function getDinoByName(dinosaurName) {
  const findDino = dinosaurName;
  const foundDino = dinosaurs.find((dino) => dino.name === findDino);
  return foundDino;
}

function createDino(instance) {
  return {
    id: dinosaurs.length + 2,
    name: instance.name,
    period: instance.period,
    location: instance.location,
    length: instance.length,
  };
}

module.exports = { getDinoByName, createDino };
