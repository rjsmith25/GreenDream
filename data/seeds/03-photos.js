const photos = require("../photos.json");

exports.seed = function (knex) {
  return knex("photos").insert(photos);
};
