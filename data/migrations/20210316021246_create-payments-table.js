exports.up = function (knex) {
  return knex.schema.createTable("payments", (tbl) => {
    tbl.increments("id");
    tbl.string("price", 255);
    tbl.string("payment_id", 255);
    tbl
      .integer("booking_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("booking")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("payments");
};
