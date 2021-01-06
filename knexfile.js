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
    connection: 'postgres://fkagwwmivrykje:d0758da71b7e84e40abee85cdbb8215650a1c74f081e9eb82ccc9ff5bf18e431@ec2-52-205-61-60.compute-1.amazonaws.com:5432/d3c1qd93d431ft&ssl=true&sslfactory=org.postgresql.ssl.NonValidatingFactory',
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
