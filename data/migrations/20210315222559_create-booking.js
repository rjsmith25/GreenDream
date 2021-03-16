exports.up = function (knex) {
  return knex.schema.createTable("booking", (tbl) => {
    tbl.increments("id");
    tbl.date("start_date");
    tbl.date("end_date");
    tbl.string("booking_id", 255);
    tbl
      .integer("room_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("rooms")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
    tbl
      .integer("customer_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("customers")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("booking");
};
