const facilities = require("../facilities.json");

exports.seed = function (knex) {
  return knex("facilities").insert(facilities);
};
