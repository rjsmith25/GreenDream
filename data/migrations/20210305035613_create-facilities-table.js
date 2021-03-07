exports.up = function (knex) {
  return knex.schema.createTable("facilities", (tbl) => {
    tbl.increments("id");
    tbl.string("facility", 255);
    tbl
      .integer("room_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("rooms")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("facilities");
};
