module.exports = {
  development: {
    client: "pg",
    connection: {
      database: "enterpenur",
      user: "hesennov",
      password: "hesennov",
    },
    migrations: {
      directory: "./datas/migrations",
    },
    seeds: {
      directory: "./datas/seeds",
    },
  },
};
