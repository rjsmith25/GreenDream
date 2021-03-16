const db = require("../../data/dbConfig");

function findById(id) {
  return db("booking").where({ id }).first();
}

function insert(booking) {
  return db("booking")
    .insert(booking)
    .returning("id")
    .then((ids) => {
      return findById(ids[0]);
    });
}

module.exports = { insert, findById };
