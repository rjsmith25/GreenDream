const db = require("../../data/dbConfig");

function findById(id) {
  return db("payments").where({ id }).first();
}

function insert(payment) {
  return db("payments")
    .insert(payment)
    .returning("id")
    .then((ids) => {
      return findById(ids[0]);
    });
}

module.exports = { insert, findById };
