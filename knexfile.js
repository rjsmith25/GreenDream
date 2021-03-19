// Update with your config settings.
require("dotenv").config();
const pgConnection =
  process.env.NODE_ENV === "development"
    ? process.env.DEV_DATABASE_URL
    : process.env.DATABASE_URL;

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
  production: {
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
