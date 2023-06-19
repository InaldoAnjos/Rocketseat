const config = require("../../../knexfile");
const knex = require("knex");

//Creating the connection
const connection = knex(config.development);

module.exports = connection;