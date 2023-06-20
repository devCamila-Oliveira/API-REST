const dbConfig = require('../config/db.config');

/**
 * @type {Knex}
 */
var knex = require('knex')({
    client: dbConfig.dialect,
    connection: {
        host: dbConfig.HOST,
        port: dbConfig.port,
        user: dbConfig.USER,
        password: dbConfig.PASSWORD,
        database: dbConfig.DB
    }
});

module.exports = knex;