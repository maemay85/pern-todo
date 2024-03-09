const Pool = require("pg").Pool;

const pool = new Pool({
  user: process.env.USERNAME,
  password: process.env.PASSWORD,
  host: process.env.HOST,
  port: process.env.DBPORT,
  database: "perntodo"
});

module.exports = pool;
