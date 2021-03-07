exports.up = function (knex) {
  return knex.schema.createTable("photos", (tbl) => {
    tbl.increments("id");
    tbl.string("image_url", 255);
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
  return knex.schema.dropTableIfExists("photos");
};
