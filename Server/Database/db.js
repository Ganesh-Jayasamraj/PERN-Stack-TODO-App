const Pool = require('pg').Pool

require('dotenv').config()

user = process.env.user
password = process.env.password
host = process.env.host
port = process.env.port
database = process.env.database

const pool = new Pool({
    user: user,
    password: password,
    host: host,
    port: port,
    database: database
})

module.exports = pool;