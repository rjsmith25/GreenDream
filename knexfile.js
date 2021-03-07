// Update with your config settings.
const pgConnection =
  process.env.DATABASE_URL ||
  "postgres://postgres:Kingdomcome1025&102592@localhost:5432/hotelx";

module.exports = {
  development: {
    client: "pg",
    connection: pgConnection,
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      directory: "./data/migrations",
    },
    seeds: {
      directory: "./data/seeds",
    },
  },
};
