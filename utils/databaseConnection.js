require('dotenv').config();
const dbConfig = {};

dbConfig['connectionString'] = process.env.CONNECTION_STRING;
dbConfig['databaseName'] = process.env.DATABASE_NAME;

module.exports = dbConfig;

