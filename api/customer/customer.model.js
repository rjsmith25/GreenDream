const db = require("../../data/dbConfig");

function findById(id) {
  return db("customers").where({ id }).first();
}

function insert(customer) {
  return db("customers")
    .insert(customer)
    .returning("id")
    .then((ids) => {
      return findById(ids[0]);
    });
}

module.exports = { insert, findById };
