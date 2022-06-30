const db = require("../_helpers/db");
const Partidas = db.Partidas;

module.exports = {
  getAll,
  create,
};

async function getAll() {
  return await Partidas.find();
}

async function create(body) {
  let partidas = new Partidas(body);
  return await partidas.save();
}

//funcion partida clasificada por ranking
//db.partidas.find().sort( { ranking: 1 } )