// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: {
      host: "localhost",
      database: "knex_test",
      user: "coder84",
      password: "mestre123"
    }
  },
  migrations:{
    tableName: 'knex_migrations',
  }

};
