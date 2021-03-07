let rooms = require("../rooms.json");

rooms = rooms.slice(0, 200);

exports.seed = function (knex) {
  return knex("rooms").insert(rooms);
};
