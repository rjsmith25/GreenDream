exports.up = function (knex) {
  return knex.schema.table("rooms", (tbl) => {
    tbl.enu("status", ["Open", "Booked"]).notNullable().defaultTo("Open");
  });
};

exports.down = function (knex) {
  return knex.schema.table("rooms", (tbl) => {
    tbl.dropColumn("status");
  });
};
