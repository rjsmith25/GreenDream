const amenities = require("../amenities.json");

exports.seed = function (knex) {
  return knex("amenities").insert(amenities);
};
