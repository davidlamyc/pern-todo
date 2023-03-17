const Pool = require("pg").Pool;

const hostStr = process.env.CONTEXT === 'dockerized' ? 'db' : 'localhost';
console.log("CONTEXT:", process.env.CONTEXT);

const pool = new Pool({
    user: "postgres",
    password: "postgres",
    host: hostStr,
    port: 5432,
    database: "perntodo"
});

module.exports = pool;