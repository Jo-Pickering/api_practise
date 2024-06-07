const dinosaurs = require("./db.js");

const getDinoById = (id) => {
  return dinosaurs.find((dino) => dino.name === name);
};

function createDino(instance) {
  return {
    id: dinosaurs.length + 1,
    name: `{req.body.name}`,
    period: `{req.body.period}`,
    location: [`req.body.location`],
    length: `{req.body.length}`,
  };
}

module.exports = { getDinoById, createDino };
