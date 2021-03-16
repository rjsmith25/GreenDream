exports.up = function (knex) {
  return knex.schema.createTable("customers", (tbl) => {
    tbl.increments("id");
    tbl.string("first_name", 255).notNullable();
    tbl.string("last_name", 255).notNullable();
    tbl.string("email", 255).notNullable();
    tbl.string("phone", 255);
    tbl.string("street", 255);
    tbl.string("city", 255);
    tbl.string("zipcode", 255);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("customers");
};
