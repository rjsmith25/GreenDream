exports.up = function (knex) {
  return knex.schema.createTable("rooms", (tbl) => {
    tbl.increments("id");
    tbl.string("roomtype", 255);
    tbl.string("beds", 255);
    tbl.decimal("rating");
    tbl.integer("reviewCount");
    tbl.string("price", 255);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("rooms");
};
