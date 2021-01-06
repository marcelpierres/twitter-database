// Update with your config settings.
// describes database we are going to use
module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/subjects.db3'
    }
  },
  useNullAsDefault: true,

 /* staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },
*/
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    ssl: {
      rejectUnauthorized: false,
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: './migrations',
    },
  },

};
